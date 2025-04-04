/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "33HNB4p3gT84nhyqdYF2pDV82S4i2GeJcMEcgmsQqNma7cdbnEUqh9n8mjLHFymy93fNHuCWWT15tiSa869HRPLZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64KzoKxeHkXfCnhM376V4MFFy5oXnrVvnbHQZrcZaeWSqV8pD9bMx3XEjtwPajJoM4xvnBNjNsCXHPD9gqQSL23f",
  "key1": "23xumdPgaNKBwN7YsNoyEs732xhaZi5QukwgAfQ7pBjHp2T3dhjpcHsbtXoScfxY4u1RVGRWfW3EEHHnTkyXYJeC",
  "key2": "2NdZfWDeptEAfEQg5zNAmgzosNGLpHZSy53FX5LLFbNZmFxHBtXwU3DDdSoyAdmmhwnbwrJ7PBx9oWWAMUrfwSG",
  "key3": "4MNvndR1SyPYLJamGgRXfnrCRvbTkNNG9dEKZFhdtJVztDayXsHzmJSFMP7Z9VRv5JK2q84SsuAP5x9MUzVM8JZ2",
  "key4": "2XW9kHHejp2LX29GatYkUMhtzAs4VVi7X9tfMmshqQ3sRres9zBtqmY8uR5CJZfG14kJs5Dgbr63BGy31cAto47j",
  "key5": "u2eRYpH8c839xNhAtdMPUdsBbYTXGQEXzc7fQAGmBBLZnYZithXqTRTku7wyVER1o88hwMvqF5oMrR26TF44MWz",
  "key6": "5p15mKHEHLQowAQCoXVgFLokvpScvSnYS2KXAncyq4j7vZCDKx6ZtqvGuyq7i4oKfaRkLXXec6ku2NhMpUedRaLE",
  "key7": "3qzT6D8iGLv2MHXQNGT7M8KWXjLZAb7bfqMHj1tm5GeVpLd2p6kD53HdsRZ1jiHnKHAreBBhJzG1NYXpyKQNX76",
  "key8": "46H3wfQxWMggeqrWrBy33omkDe4XGmTW7JWFW1XPGEUXnGAV3nHwycPwA6FZKKupgxr77u3ttW6eLtSrovoxbYJ7",
  "key9": "4o5SWYt61BXLHfCHukBCN9jCm1R8gVXbHGjBCrah9rcYMudoWBDH5Zx9YrHuv6FNKjFg8ay6d98pE6kFdC7CWD5T",
  "key10": "4r4BY1DxfyGCM4wRdvs53PZSsjQaw1JEWAtVjL1uN75KudLga4eKhsfjVMsgJiQPgJSv5CGE4mozGqNTkFJ6HLw7",
  "key11": "4TG6vPkSU3US5zXgpnunew9hD6A5n5nRgZL67N2eVw9f3tBKZ7bLabpGUodJJkQza5Mozq21kN2tc4NemAP1Lyfc",
  "key12": "4smT6jww8L1eGuS76GNumFjhhKU1mG9tEzDxfhXcoyGbRXdnDQqaFqQzUNiD8oMtscXH3EYTSdkJFwZJbFezMqGo",
  "key13": "K2WQyjMFBZBAYzjDgquuywK69mNhtCZBvkWZHnUHFLrQahpL3X2bFFb5DgQ5UWCkLNs3D4As9dLALnFoqc4EeDP",
  "key14": "3BGgQN75fUcjEuxGuH7gggoThFFxY4WzdjPVkEDXMNNcTyC3rgjEM9JUJQi8EcyWfySX3ZChKy3aMpD5zug4ryuE",
  "key15": "5c7RuKbbAkRYnJ6KjknE8gPNpJBFfv1WR8YDvLDWJk29ExDeAanhZyNihTpqvURnoCqjcc2RCiebn4GkD1T36eub",
  "key16": "5GbDy2nyeLpGsvtHfxWeJAmJDEGtTmSuNrPW9RX1zZo6X95SNPZSAPJTyYF21ahi5mf18T9eELpedeuXk5ifJGxq",
  "key17": "axUcW79F4PyEKNx3CtnXNeiALc9qEHcFLwNpLJDRJQiAif2kusek1oPJSuvDcNL37ieP6RRHJDb5DAAkVDEdLjw",
  "key18": "3fqy4te4hv2e5gmyxUMCBo5ro3BeyteanJnR6yr9rFmY57eAziKrfctnoLSFGSnvobxyZPm7N5mJQvnUaUuUNBqM",
  "key19": "29QAQ5RrpLY9ufrpMdTBjQ3EAiMYsZhNsKGFEsffLSDr7KHUJV6nQK4mt3nfiGajFFkVdwZDwNo8TPjvthYjSHcg",
  "key20": "2DXPCVoMshyjo86P6LwVpQqdNiDoVFtCpsKH77bFJpHF1AaZp2JWBzFajDDPspT74Z9Ws5pKXMywgZYxdf7z2nNr",
  "key21": "2ihyFbhMaacQy3gUgVKuqVqhcDpqP7PQWQaPzcj2L6QTX4ev53MuGmpVrNm2oA1nv2FQzTpSEdnpG13AGQSoD3VQ",
  "key22": "4h7jkwdXGJP6F5KtWeiHMbaJ93oMPt5yrwk76UYhFpYdeaJ6vxdJg9SdBSULRKtmzo3VsrLFyhNx6TfAxkn5LXYJ",
  "key23": "5YYKjCdRgAag7xRZ5XgSpgXWx3HT1Xg4ujBXbuABU4TeqAc2ELFBpEyNjgUqASGGCf2Tgme89eKiEPeDnDPiHyfF",
  "key24": "2FmNqEr448P3DKrt76nvqx9qWBRfG2niqxzcCvQqt6FQqiNxyxqhZzoAdthvRdnjuj2wPkUCn38GepeJ7RLXTeSc",
  "key25": "22xmfoAhUwPaTWYVbekb1fnuH3CW1xhUNV8ZfxxwYfGHNfWa95yd227HihtSMe8nVa44pFRM3swG1zhnZVWWqvh2",
  "key26": "4rYpqE5524uTU5zRTs124kEzYiK2LPWYgqapBXZUFYNJBxVdpLEePvL8EvHhpM6hYVharV2wZkZAAKPHgAdytiPe",
  "key27": "2CwAmqnEAmtdJRXiwB5iYjCgPLXVgToMnihHejvw66mMdFayMG3zAsB4Me31Y3UrP1xUmMd4jfuUhTUBY97eAsi9",
  "key28": "2pzZJG4LEq1dgUfiGZkEQme56siU2vAkfUq6AkyVpNSyiY9miQuFFezXTVMPmdDbeCrKNwNJsFsfZ4nd7e6jve3h",
  "key29": "2nQqgRe3wADdPbG6S2sAhJEiqusgmZukeDAYdQawJLmoDXfpaTktqHLsTL64mAvKFEss5qNJcjRhiogrcFXWoN1N",
  "key30": "29xhnEhDUAvf6UfQzeDXQkpRp9U4s4xLxsDuYqLE9Ni9ev6PJUAyiKdJTWyuxL9Y5Jwfug89c9FFLYPiXuoSRUsM",
  "key31": "YhNyjt9mr8mfX1cmbkRkJ53C9S7uciCGXQSsh9YUVFcWp3ApzqZ1kxvY56r1dHAC81XoMeQZ698VUWgMHCWSnmD",
  "key32": "3Xofck3yuToGgQkf77WdfDDgwhpHQKGxqKWDEBf2WKAMaBb98DoPQ4eiBdAoJbFHXJQKmptgmi949bN6M7VBfMbY",
  "key33": "3VXCAtpit3rRbyDsY3ekwd76t2dMgj9tdxnVJyg7yUdimU57EHka1UuuU3EKcqg79ZFATTUPN2K2N3pKJ2J9uP5m",
  "key34": "4PJXEF1NWj4PdLx1iTiTCPBm3CB2EUSHcf7PCEvhYuH3aqJAUvjYskQH3KTrNbWZUuKXcDRfUoZPP2qdjf62wTF8"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
