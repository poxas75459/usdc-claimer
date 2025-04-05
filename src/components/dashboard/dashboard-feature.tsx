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
    "3GAJpDJdNcmNY7z8hcjk4EScJWgM6waC8pvPp23xgwbgRcoqCjzoeu67aw4pEUsDAXHub9EUh9k8Ac3K88zJW6m7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CuzgzjzCPZzKEQ9w9cyy2EQDSUmKZNE8BNfG2AcLtfDYgCAU69u63sauW2EYT3CV4oAnmiPkv3jQYdRiLHsaGrL",
  "key1": "64sSvwWpKjmuYNdsvsGCfMfVxhnDU3aUg3CJY9kaGWkiQuVTJBo6KJMxKgCfQryeGrExMEF4HDyRFLuuhNC6itGK",
  "key2": "5316kUFbM1SQm5oG1GzAfUwADUFmnptD48qL5frJwnjsHpg8z3FHAMyWe25ebVWJfXs5gm193Ur4TVo71QeuJXZx",
  "key3": "95rX5x6Fyt2dvAg8U9Zc51sPyHLffDFvtAgN8Vwwqv2cvWPuYdt3sGz4kC1ktvtUMRUZ1sAZyrGEWL73PEu9Stc",
  "key4": "4ASDyK45VqNCsu5Jy1kgJ54egKa7hcFemhj5hQAjdnKuiEFRCU4HZWsvpEBPY1YRA6JU51RbSKSYC3sym8AyPNN8",
  "key5": "39P9qu9PzyY2uq1d49BUhas14vHY52KrCLHinc2MiApFppgHMScyoQWP3a8LjZY4uNniZsoguoUb77zdoEo5vY4V",
  "key6": "4xMeg4NArM95JP9a3vHnsr27wvkcFefrxyfrUuNTmsXEroRNS5Ssw4ag529HyvFWFzGqhuXzxGCCSEyCnocfWx2D",
  "key7": "5Kq9f1vui9XjvzK1ePG2BPaKnRuU1KgMKHdR9mKs1LUs3HLxh5MdnxJKEqn3Accoj6zUVX2UWK8C1GTjwEKzYD83",
  "key8": "4kXyhn95tBTJFm1Cfpn6rUejzNRE4kS7jKbcK5TkdwwD9wLrrBTRMkP2SA3eLTbQyYAkUrttzJhdK3AGo5Ryacwp",
  "key9": "51WVHmR1bBfNDziHQg3SuE7NwwkhjDoza6qSbBmGH3sQfjrARwYnd5DeVZRx7GrnPffBGHryDT8R4UDJY32YniQB",
  "key10": "2rVMQjW2QQY7978Rbz2MhvMBmcQXmaeCibUy5fN7qnDsWDMuwqebvUosqcC96EAJKDQtQ8DmHRfCNG1wWQFYs9RG",
  "key11": "2Cac9CGqJMdrTRXtnsMcsaUavZ9LZxhEAo7LnP6KNnJSftHdtgFPUK7u5MoZwqxNNVkFn8ZdS75ucUMX83XEzNE2",
  "key12": "KyMzevPgEnpMJ24M344yWr1KdEAaKqaoCGvBWcUJFcJCDYsQb9DA8PWD2aHHzYLSgeQ43mMRmYuuXP3NWC5n9Kd",
  "key13": "3hS1cgfLngnLWrm5ZGdb8qWVG5QWEWBWqugK4KGLbpnoZPTemZBXDUQJaifQC9iD7srUfyg7NAKQP67sWHCZ1XcZ",
  "key14": "3KUgGJB41NGzHeRD6B1wqv1fhGn6RFZU5V7gs5QhJAHKfRNvmcFupqx67ZSWBqnQBkNQ7gwMi1kHZTaGz7FsL3rM",
  "key15": "23BW988QpajJYSXgYsJCDNbhPisiccEaZti6RaodwkxzUzEasd8vp6AYkuR4rNfVvRMAMmTRQhvJmcBuPicr4S8G",
  "key16": "5HXMfzemixF8N7BXantQz1AUYwqzvDhV9LdSULzm27XtFxQgKk2zXgXVzZAu7K9Eqqnc82RGD4ZesBKMsBgk4Et9",
  "key17": "4C865k5Ndvw6EtihgAstt5BU52tV1AdttXfSRe1nj75f1MuwQ7p8N6tD9WAz1hifAg7GUdZnganpDyAkyFRR8ZDR",
  "key18": "3zFWCH6Zfhyom46mVdsaPWX4nm9qywbUa2wKa5DceQ5VRcnZZRoD3GB5uY25KUnBJectfxdkfj7PjKQkzSWakhiE",
  "key19": "67RMVMKxFA1pWTLpKFCLRyRwGtu8kzvHVcFsTvtb5x6ECCbudRHnJAnQorHBfdnscqtqnauCeeVep9mYuSz9r3g5",
  "key20": "o3n66cQcGAZHMYWzNo4aspaKnQqoa3m88N6UTAHKnjPqLikDPgskZ6eDjKPNBCjepEy6DJ8WmUgtzFbC9GqNWF6",
  "key21": "hcjFqTqqc9BkoykYbr4d2Y7dxAgG1Rwo8Eobiccgyyh5wLo2jVmQ7Zd7Sh4e2sYon8WsdPAQ2Ubk2zA3JyxBG79",
  "key22": "4B8FV2e1bdDYs5C96Aq3hkUC6uEBqftTgQzMwQYPDAs7Bi4xQD5waSCNLg58mU8zm87jdz5tQfWeZRsEbMgSk8gz",
  "key23": "4hHeCGXsLtHBCzbVgZtPtZDdMvEZwiN6AsomdD5eGBvjudJQZMQydPaPUGGS6mHQxAgARAwF7notmdWTnryNiBad",
  "key24": "36YJkwT6WzPiztHngtoLJnAGoMvZjY4MzE5eLmPGnspTKmNfhSbyzdZjBe8YVBXnNHFLNqk9jMYtzmcmiwfPYawU",
  "key25": "4XmCmyQ2P9VM8Ap7nxhBy29Enb3E1izvGANojbEpco1KhsFgSuMJARrz92xrUHoGkf9KsyuoiakKDLvQf8a1AxEF",
  "key26": "5QmMq5QcdA3hZiMzGzv5Cb9GSuxJgi3xXMopBasxZ2Dn5u4oieoPvaw1G4nVe9csTCdAjkYj91344XF1Bdears75"
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
