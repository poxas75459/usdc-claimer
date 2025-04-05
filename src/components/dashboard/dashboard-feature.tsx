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
    "59WADnkHFYH1abbyjAYJqGi38JfwzkDBVMBSmp4nd7586pMjKqRoXGg8ggD6aHQ5KkneVVw8jg7F7BK9RS7f7xzZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5As79t9CSYH7iDk9gMmzKM6bBRknyb58RieGCFF8ijrGsiTdZjZFTs5hknoGE16qxt2QDHtZhbrhg9wXUbRmtajB",
  "key1": "3mzj3FnQKWg5AceKPboxFFRBUcb7J3esKFSybfopAcLDoBtcJrxx4VcE3KYVie3XBdp2Kv4wffNrYHR4a6MZxBnQ",
  "key2": "5xgHYjh1Pu2mSzVhwnZ2wakBwXFs9JXE3vCHgJBsu2yR6LWaWLZGk2bNMd3LRsoiCbxVnVnLggC9jtmKJKyNiYkk",
  "key3": "454foT8MgAGtz6Nuk3qxt6RvjuLhu7ikxRdL4FC6SqJufy19SgmdKNfT419EUi81swkaj2wZeohpVvMd2cQoM7sG",
  "key4": "vSzromJhFp4Gn7EucNRc9UjQGjbNGAeXwTojLHJZnR2fAhatid9bA9kD5p8ZrHQmW25o1hMg6WKJHedNPpLA1Xj",
  "key5": "4K2HwTnAwxkgTRrCcGt7fkgnPRS5ZitaNe1TAMbvwKpEi6quaCFeSEb75EUCPuLMM6b4VhAG11yFnhSHxUtASHTg",
  "key6": "4N64d2Qgtz8JxbNsu8igttGmDCwBtixaVFpVxwAHwNXPBrW54VHux4YYGYn9HnbFucVtr1BDBdJsQ617FPsqtMPX",
  "key7": "iNYPbZVqhGaSUpZJjjc5nTpvk4fvcMysjnRa8RCYKvSHS3s9bkEW4paj5Gntwt1tq3LU3JdRu3t6jA3mjQVKeA4",
  "key8": "XJoo8CPiRE5gj3ebKJAAhHJnhnRq2Xrnm3EHxDSsyPwjsYEo4QYiLZWsSppMUfqBjFzuEsMfHMvGHqWZFtKxjoq",
  "key9": "3uc1gKeJgFAkZN3ByjcGXVqNZAUFpcjBS4GQjjr5dJhmQKMZbV5nR2Vcvuk5dQUShtNaSHFLBUacgmrAm6so4T8y",
  "key10": "2rZX9hpxdDkhbhxJoeK9tvEqvvQf6tf1nPDxWxigbuz82kVDSmr4ytzAdq7PyXQ4kdC6p92CtZ6C6PcF4kQdT6Td",
  "key11": "38W2DBfFDdaXTZzyK2JAPhunfPWk2AEQmZnUEgR1KDiti1zL9ks7W5B6PN1GVyzQFougQBLe6SjLW8WmZR7GrxZ",
  "key12": "47zzbNFT7rhLHnbSUUmrL8WKLuejFZdRUvNrAKDw4EukqzFYkNqr5qdrH2igGHQ5MvDXwQEu9JZuffkfTq4FFV28",
  "key13": "3q3WweFk8KvVReZpJwZJWpdHkQpDfKaagX4cpriri8Aw4xELBsheewEXnx2bkUK47LSqzq13YhtuEEtF4gRY5SSg",
  "key14": "4FVMrnhfBhwBDEyNFnftQGjwtJ52s5RXEqxSsS4SHRsiohWjMAPEhUggtrDSdJEV5E1ipkZBX2o8xFxj4VCw7bF9",
  "key15": "4tpqTqSF9XhbMgLHDQzXTXRTPctzWAt6ivp1AZf49LHvZnoVVMCmn41VL2nPy4fxhA8arWj6bQDr7o3wswCQyqpi",
  "key16": "3rGUiu2tCzbDG6uTvqNUNEnFPcHQ7Qzr5wsVXvp5VRe85YYPpjYxMwgVwfuWyH7waZEUV9vHVJuUFiHBHT9peHrQ",
  "key17": "v7hMVgzKkrAnQNpVtpJjBCAEan9vD3use3QuH1gA76bH68FEmcnJ4faL2kdEMuGbFCUbVz3pCCcRM8VwBenTQ2X",
  "key18": "2AwERBzaRdYK8h6fskafG7UGjq4ufsCA7hdjFvQsdDSKDMXoMyJfnG9Y2cujC9hEYYZERtrjCsqugQvq7CJu9KZ6",
  "key19": "2Fq8yVwUcnjXAEn2JLqhqf7fuM1h9WwSJzpRRGyFSgzNkJcy415aek58331QGK7hzUFhkB1uaL7mdPqqkFpPx6ms",
  "key20": "3UZYaauA1T67EFokxjfyumaNVGDDSWAtiHeSMNVGqpUuMD84AE34fbf1hzKp89h1Hc84BoBbiEmLRRq16SJzogJk",
  "key21": "5a9Gg6QFjhHLFHKNpVSi5xUwdXZtDMRdfBAtQxFCsMHUTEjura3AC5iaMG8XZaGSCvGKgr1G7kx3pyptKjo1yfdM",
  "key22": "32EocAK2hEC7bDYoU8W7anpDTXN5eBFm7749DRRX5xVsqz72Qaaa85xmnhdfHmUSe8XkwX68f7qbUx49BnryZkSG",
  "key23": "47SCk87aJhKderKSUbonMbbQTVvabdCooGoT7D48WjhYrpEP4W1eK6KJeTYjR2n4hJUHvaijZX8j1uwNN1FjaPm9",
  "key24": "2PfvbKymjXdtzaxiFg3dJzkCyinR2A6KBFk81jiKM37WMgQpu17tbWLtywAkBMfzgcNJcuNLGozn6GNodYNeMmXk",
  "key25": "2aLhq4XUR9bsGUDBTrgYke24iT8WdPxYAvBkXjyoZYzE2yU1zBDGcwJLVnChGJKDhYRURbptbz6vq6yoExEmiYJU",
  "key26": "5vPrESTwBB6ntTAfPMvaWtexZpWJYEG1osiUXMPhXw64sGUqezFpPgPm17iE5d4VNSp7km5MKQzoPkzk53RNAdPF",
  "key27": "s6tg6nMpQDfEaFBZmFXTsqSPcGmU6ALjiXDWniQ7bWz5QqdXpnfdV9TpF6hc9Y9pZmUudWXQVh8HPRuJanWAqTJ",
  "key28": "3j9V9vQcr6d1uFcyLngZc3scd3mr88AsaPAPv3bHjQuPpuh8saQuzTEm6mNoLLBufyH8oK8aJuhgsy3ffyG288ig",
  "key29": "2vnq6K4DztWiDTyz2LRTDRgoW49Vy8zJC86LpHXefDGZm66Bfib6xdFeb6nmzx8MXbyDM3aWk5KXvpN9esgmWsRu"
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
