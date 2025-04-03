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
    "4snFxSwyTo4useA4sPoXqqG4nFLKuBLKWa42M2TGi58Z286H1LmuxyND6nVVcoJPZuZwBuLhgAwBHAxytWsuuFXv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28VP8GYXM4uAGMNWbDFrqFrXBr6i1zm7yxKBgWSoGo3C3URAcbSBQF1jtptBdSzUkiwm95ULXb8tDpsVB1jnSEhf",
  "key1": "SkHmuhB7HMYDse8sNS1EFBuuzjhrZKJtG1Sh5kmPnMa8fYgSNZ8YY4KkdizZotMK2391wUEc39EoPzZztAN678Q",
  "key2": "2adD6Bfkeo2J7qffX62VAbdXeJHMPp6xDtXufGJyterfNtosVyNSwWJhtWN6CYXJvZnhJHX3p7FqEg2CzNvwafR4",
  "key3": "pH2fr6xoCLzvwhJeyp5sSPpsmUnX1854Ls1rncVN5x2iuZkVHnTEi4jxsyemtQCHa2PvRe7HQBqJRsSe6pSnsb7",
  "key4": "5irwMnixpZLf7f9uAwfknTfu1VLUqv7B1sq5yF4ZgTYHvU7PXEUZBvXg8Muc2HYxDy35NJDvVS5xBt6LbiWFkJMw",
  "key5": "2t2NG7MboksaNyCdPhgvh6K9aD8vAsQQRPWDXwq2E7nHepNkMCXTNtW9fiSWxXDg3y3Uhrk1jcmKf4c68nyiBLY",
  "key6": "3sLv1UMTNeAmUY2PJcvKWARWHiMU3FfGufnTnQEs2cviT5Ft5jfVZXwvbcrMNiNFsYnMhVbYC4XPTHNCp12q613P",
  "key7": "3VTMs9GqzcmDY7GfCqckQe1zBq7KDvbf5hpAnAiTBvBPGTSWt2hS3dmRncvtb2ChFXdsRNurnRYpnxkksPPZns7j",
  "key8": "4GqDwhR1pvyogW5Ayz8G37YLycXwo3QYw1AbUgAJsi2qqvbP4fB1BMPzibNBSDH7XYb81AwJkXbeETRogjknSJ2k",
  "key9": "4si3shydYxPWR2gpCBx1D1QLt4kProeNU9NH7y5ox6jYDS7dYWPdNFb5zhTthqxqWu3tymH6gohBGBWMdofL8qUW",
  "key10": "57wFwPkpBr7dz41uSQk7gtE27dBaygUrEg2yr6WvjjZH5vgTExmUskjvpgcsUDFcHVmNGs5NzX3eYy1DPJgHhejn",
  "key11": "7KhZ4ScccFPMtcVVMpeDNEGyxDkC3v7c7DWiZqjdvf11PoQMMd6iHpa5As6c3de7kzf4tiKVc6vKQ84nocsmcuT",
  "key12": "3zWpAfw8CR7L7Z6ynagKamp3ntXsZCVx7wA5jMVnkrcGtXpvUVo6ggpwg93TKz1Q9woRpNrDo7Vevp5RAGsHcUja",
  "key13": "66YZueZSf7gWu9myCatnDmHfDB6V5mVDzu4xnjLwM1Qhuwf8twnCiKLrCHbrHWJNRea8utT7z2LiUVP5aDrit34S",
  "key14": "2ND3ZgMDjp4J4SRFv4SVECgcsFSYQHer5KdvYSgLGMrkCj3LMxnsGsUtpQDXeAjXTwdGessj8HpvG8E8uvvT6jRn",
  "key15": "63LxqWuDp22qR2ogkC3qKkPKwYS21qLVwLi49BoepfktB1xNGvVHUkdSBarWwweSkDbtbx8WCY9Y4CNDPBqvWQ84",
  "key16": "3AVgVgHT86zrc6MV7i2P8nTUSgXwF5C6oh2Ao91GiBWoB6s2QemUDWo3cWyoUsSKEkS4gTG3C5nhs8GD2S7bimTx",
  "key17": "5oSQdinLNFuB8AL1ubyNPYTJYvPYhUL4y4zws5tws7QcTMbUUdQqXt51YCzwLrKjkeYrjTiBHh47zk27ehs8LW6s",
  "key18": "3V9WQRGPFaeVu3yoXaMH9RBMDc4gKcfTfn4EYhAfhv2wYgTGaQSRvEYqmbCLrU27sFjrWyXXJF8zKWA3mJfdSx2A",
  "key19": "2gEADELpMHSawhnXBkVzVu4V8suHQj4MA2YRiWUPSpmq29UmwqhFVQcRQFKn8bMfB2zbUDxq5qAxJgfWqhbguSTf",
  "key20": "3EwTyLoneVK1BTXgEnHvEEMjUixXHDGmDTZJkGQfUuwjCHY9y17FeNJHuihjSVBTNVRTQ5sMxX3gE3XHqak7p6Ab",
  "key21": "2xL5YsdzNtmCkmzm7umTtrqU8bdFXr2tYPniU1aY74jWCPuAbETF3XNUpyKT3cfXCi12m8mmruyJbETNUDWkjbNW",
  "key22": "548NurGzbzphRL5erPkJ2jGXNB3yYgoDoKaLqDskvwudWjmmXETkDJBmGU6QXSPYk4wveYM9GjVBG5bQZLSVpRyM",
  "key23": "5DQ5PnmaqR1rk3xXFT3upDicdYUwtSLHm4rKydpeLmqx6im9zo8pmGeJiBbbBHjxgiPbgrVzD55HP7De11aBcCLR",
  "key24": "4BcqrrCnATndEp4cnBWVQ8HXn3oFghqCncJFNpSpq3w12Lja9BSMGpmNDF7R2DuUKjwaPTHxcK4JZfLeqRQdJyGC",
  "key25": "5g4XShk2x9WCSajF3Viv4CxfkfqcTf8ir1JJVtqS15zvaePmLjak8QXXzNfhCNED2nWa9hwL8gEwK7ssUe6LNrQ3",
  "key26": "5jSDGrdqnjTpvBMiiTmMYXJQeKcayDWSXUSK8HuNw2apxiwUYCWAKZTyfhetKFqqFe2Fqj6MCXo9tWSNbq3JfdkW"
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
