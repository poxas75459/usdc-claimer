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
    "Z2yNK2senVSpxz6mjXMnoS6hnDAegbAYN3aGn96fVJUCYxPMkWnGneWm6Km88UQUmQ2VZj5S7GGR9guLLG85ubb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wN9bSNp1BnC9kv1UJ9s6w7ywQamzwcejaRkxv9UTw6yKymYs2fUqBCdiNmsXgxVSPgBMseUwzupoUG7HPh3VMY5",
  "key1": "2vsppHC75C2JEPQ6anwCCVXjeG5Kxzwyn8xVTtCvPornFUTv1xTQaLy1n2Rz3LeNvcyeUPJktt3ihRYHn1oFiD9h",
  "key2": "21pqefMg8duDmhpgYxonk22eY6LdUZEHaTxjWkVESm1VJ2bXKaMAocy9uprJGEVhv6hkm2fvzFkHurUZa9cnBJXm",
  "key3": "3o6J9KWyVvKwfuJRgvZpaSmztV3UQoJJCxEj8jYur1urRAopr3aAPd8ST9X4c3V4gxq9WJvZK6EH7XtaofcENT1r",
  "key4": "jwakn3SKHSSvcdKLgmS15vhx7WvSynGw6kPtfW8tzJsZa1rUjBABJYSsczzV1KhwekYXS4XbTCY24ot8GeCrdeX",
  "key5": "2WX9qXLVJ7SQyZdqabTQ4wtFdTDhu6hRSfzdu983rAa5cLwborzY6GF6NFMteWGcs99G2tgMQRnPwtG6NKPhevnx",
  "key6": "56XXb7eAng3LBreubUzhhjswi5Vu9G17PtNpeAn4xDicqBTn2jUpnLvXasfkAh553iKgeBBq5HSZQswzmmg9Vnh9",
  "key7": "4WyZXfcfyrxEYXqLfa3WQy4bPntXDaSAGrtqcTf6AtCK2st4q7CSopNkzWmodFLCoCzTu5x1hSjYmmiHL2Xf544m",
  "key8": "4Z48WN8f9w7GHGbDU57tzbGth3trsk6gzM5Q7Qu4TEubXmFzH6R7wJLnUknbXUDSgNL8vuyLbre86fNEt8D5uSds",
  "key9": "CtHYeCnAfTmteGdkkYrkdwu4tdHo5KQ8sCmGakCj9AvJ1Pt8oscYaqr98fWYL2SoQxrYfym5Ds3EKQsy8uVB9NX",
  "key10": "r2iVixwKJPtPPbekV9QBc58PZAvbDnXaV5vtJjf3SDtQS53Tc4HhYvWF7wptaqWK9Gp32Sr4oJvyKpZbvAHfxJq",
  "key11": "4asPLr3udYftxXd6ruPCqHAJgYrjuKfNqahKGBz2QQ8qK8Q9Sifz59d1M8QPeibkXajyxqom6riGj2mgZJccMWzP",
  "key12": "P22AGr5Vr9YHFBJRmyEvc6Ly9mVfv9MtBZ8kE8WR3sQkkLZXvBj5w8yPemuVUxsY8sJRQTRF6Zhw4tukpXBMho5",
  "key13": "63jMSUqQvAy21kagnYv2E27idQGDxhtKjD9FLiAepPLoegg3MzhLowYvds6tbJTopjdmKfuDNwPoxCSWbevhXDA9",
  "key14": "3aL2xhTAMGb8yqF2veoCucEmFdpti2jS38LrsBqrfLCg59bvvkc8kRom2oJvsaukSKCN8BTzVS53hN3FiUSUguJF",
  "key15": "622zzGeiW1QEJ5P9D1nAeUQiX35QZqnwE9ekwTYJrdamoPUA5mfQC4hTbfGnVoS6p2FDLKxJr8P3icMeJC7U9in1",
  "key16": "5KwQwNHWVgZp1EET8KLuCSvJmA5dHGEKfFxiztghzxc8rZHKZYdHrkuPDp591pBjW49Lwqu6QRD77DWEKbhGXcj1",
  "key17": "5RBmbpGc3uokjWuzvnf9A2AoBvQPmsd6aUwJNz8KqfTLheXGssmUVdizn965NQBbap25rcJneWg93LqzYZn7urYK",
  "key18": "3VK3A2KrHYSgxCgbSsqC2Q9VfphZ5aiub5FAQScNPatfdZAx5tU7QKCwpEY9hEJYmgNzxWeBZnQZYEArkD1ZfJ8z",
  "key19": "5D7TL9aqU1fYTij7wXcyidBbPnTfy66xPHkxW7yEvcYuG9ECCRXdfpCuPKYN3UYBe2VN2NKbYctDKGoPAfFP967P",
  "key20": "3amWD5ri1mH8uy86uEq3d7PMx5cpxrKMDnyUA7xQcEJp86DTTG5R5T9jMYxYY4kQtX1LFaipJQpmtRXZ3n1Upuaa",
  "key21": "3jbukqmU1xymvoEkMCEqxKsoy1xRiob32mZGga3XBjGMymP4vQ3TAnLJxCwaxHm2qYjrUUjjZpgYMazViwrxZuP6",
  "key22": "2uygm6W1XSabXcDWraUML8vbd9Mgcmn9STY5hPmWT3P56Qwxy48WKdZ9oLWuzZK5uvhDqfVMqUTW9jPmbJLu6yE3",
  "key23": "4hQXxJJtRxFSi4GeAfgjuEvQKc9dCV3FWKwwBPyZkg3FjGsD9sXySVFNhLp68HvFPw13Y9tEvuC3DRzz6qiybQP6",
  "key24": "6dRaAkzuMonG6deKQaDEAYnMkgx9wwx8cvadV7Xkf4bpNqPPZSg4SgCf3zHzXQbUAvfDmkRiGnsqCnaSZoYSHhx",
  "key25": "3QMx9KF84ibHaQW1uPVqSY9yzAieb8JSQCfMJxb6t44advVHKPu7JjEVr78PC9SSBVgLpy3knt2HLk9xTK3Wm2WJ",
  "key26": "42ECFWkDUSgWwJeDHxgFqzev2dQsjsgnposwjYVbf71sjgA2VoTe3k5wiPNgdfWRdBCYedBDjk3UsLxtEyaQLcYn",
  "key27": "75XgCM5opA8rKckVnLsjNsndYC5GKTaaSLpdPQjXTdgsMfZXcHypFpPyQ87zc7ce1NS3UmFKmvo8QHY7XU4ED6U"
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
