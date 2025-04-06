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
    "cVXaH9MyP452w56nkwSmuaXtY49dN5Zk5GDLovxnbf4867ve35aBuwL8cX4zWV4TEnh1SeM71Gt5zwdcVzybvuj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3E5Nbf94jq5h7tNdWBHfBJAXXi8BN2H1zahQJ4FPvS7kcdzjsj3PdUkLNvpwMdE9xUyVoMDDx5gBV45E1JYwHBcd",
  "key1": "2x9JM62kxpaGLFDeU2iR65fQTdU2uaGQPQcjhjnDNvQyy3YG4ExFX71p6fqf2pRs5EwXzsxwqQhLRRUwCkLBZVSs",
  "key2": "3e8UkRrsBt9JDT6bBEG7AGtSafuVZiretoC6zhBht5tQ46ZXuFEMTdxqU2DcYsSnggdnrzCNRwmd8sQzHoquGgky",
  "key3": "5sdWejxQuG4BogZecBzjPmnDYqhxGPtqkfm4jK9mExNteUn18y1f97UHMk7ydBoS5Enp1EehZkJhNzC3xB4k7qAE",
  "key4": "4ra4pNiaVcy1H1ZttFLWhTnTcBLUCFFrgfG97VV3bJ5m6HsaTBmbULy5dC3i1Y6J9addbGvyFgNNnAdcoDSvyVZF",
  "key5": "4HEbXnxkMJ5QpxGGmQaZ2CVNVNX9WJ7REukGCT6jkPHAXaBz4zehMNaBtxtKG9qMYmaju49UVKjTYhgiW1ZzRq4K",
  "key6": "2oAKqBczcL9WfR6kLPzFB3ae4iGorB9137FMSVw7Q8aib6WUZyna58Db7DuTjpesd1ULESEXmvPQA2dStTStNFJu",
  "key7": "53z4XmFjqdyHdzQhvavHHzo6PYckEzgWGuSf9SEBigivh3KtisDLoLM6gXFSv8BxsaKtAWGRg1YXWipXuuFYQrTH",
  "key8": "4XGd2cgNRwmQW2TMF7Z91sfMMhJ9ToB4a6QweN9nxizHraGNz59qn4VCJsiPLGx5CU8nc7ZZQAgUbhtccucvS5S2",
  "key9": "4oycjeYjvN1v794dEwFvdkorvA9XkbrdSbGPw9FAzWi1BocmBixuL2dL9FGvPxgfoibbwqvspNpGCT1jg8mtnKzp",
  "key10": "EkJyuZP5YcfBcKEBJDsZjfRrjej8v2EDWiWMfyNZ3cE16d9iLJcAzTQDwjExk6T8G1SoWFH6oiAnNuYMj2hHfw4",
  "key11": "33pdGk2sekiccK9AgWoQDgSYFKkyJUFv65ADMkCHm6KJR7ufQwxbQxrdrT9z4z3KrcpvgJ5kDcRSVL5h7qnsxQhM",
  "key12": "32zoAwcyjXAZUgzDdfcXgRURf21g8PWhR7An9Koxmc5dcRjKJrqkzRMt2mMPUQQ6nNtDV4utt8rv2TaGdrQKuAKm",
  "key13": "4MCRammr7GFQKLbmzhc4FiY15zUJuy5sfneZqZHBKg61oZM1uSDLMUrieCpsCMU9gqSzDbGJzNRmS99rFmrtNEvG",
  "key14": "5rXeijycXEtwkC8y4Fdsq9GRihq29KfcAZgWLNT3DEnZNbT68ShiDPcguZpMMsQkSWYTW4GyTFVqSXqhSV9dTknw",
  "key15": "d1arACwyUanJ6BTtv2Vec5W7zskyySfBiray8uCCkHYcZM7cm42sAZVSVnMpw2vqpKErtaVGY4dJrdWoVmESxyh",
  "key16": "5E2ozJDnisi9LwuF6z1K2zhCXmFjz2MU8TpSYPXHdrXoy9ide2CnqZJQSSgC5pnknZqTnDghT2L3j4PHNbQ8ZZAG",
  "key17": "3A3u6k1EHP8mT4CWx9amJPD9WHrr1eUYgaQ9p9dMuJC3yFiBXzLKPrEpGJZToQrB5cZQCDUu1jZ5aBYBUUYuSDZ7",
  "key18": "2uqZjDCHadV8SyrdSCJajncspQt77YNnNbGQHFGHhF7sSvoqy5UCXqYTBj4snodaihMW7JiiPWVoqC9z4fvxrJVy",
  "key19": "4EXnYcoFn5NHFD7ua9ZJWcxJi3UvK9gK3otUo81KoF8dKdSMg7Z32GTHdBpn84KX3X7uZk2tq6CcHtB2o8Lb7DBg",
  "key20": "5DTDzVRUfW1Smu3kUXzWjA9X3MAiX79VQXYFKLyBkiZkDJ57DCPeunAS4ANpCakHsV67UhT9j2weH3stZFVNfahm",
  "key21": "2uVm2wU9Cv1nt3n5ycZdVPRDb3WXfAwYN64oDbujZTWudR6HjZiRrqJQmLigCVne9KUnAr3mtzmcRNZgKrrPjz3s",
  "key22": "2sWpX6zGW6odJ2mBp4FomNd7NCQx51ryXV5U56EjjfucBqmcBH1a6LhrwTpZfvgpuXjnC9M6zEgUnrNbXcU9gMoe",
  "key23": "hNd2ksUczwr8Vwiak64jRtN1kmPzNVrdKdF5qHa2cHkPn1bCAmZiPZoZfqjoFYndXnzFNFweJh497BVoxDitwBe",
  "key24": "3gMbzDtVb8JhvstJ3A5nwP4YQtiWvoUdT9oTr2Nxe48hEFZy4cYjxv6HvjNGwvTU3ij3MfJPsz7fD3UfayHetXuS",
  "key25": "2dRNH2xkFGXG1ibwDszSgmKFKC87btdnxoTVv1CbAb4SDVCBCjDC4A71koSnSyKd6LWvBa5gmxVeCvs9SME8TSet",
  "key26": "5Vms9B8WLcRZnwxYiYXXySHmzLqNEV4W7muSpoApS3KG7LMULZSHXuPGhJvCAU8FUWDgjmFeR6igz9TtPFGrkZcQ",
  "key27": "442diHd4a8cZiF5VHSH5Z61dH6nEwq5DfBam1rziehkcKinjaDuwJBXoTojydVuDR9Pj2ycX9H1GMdGixCTgvHWZ",
  "key28": "5qgpwi3NXnC2Ywct3WpaM4yJvNMaS9RQC4CNoUfjUgRWmmErhcV8qKkK1K63nmdGFbAaU6rE4pKWbaYbYfts9X5t"
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
