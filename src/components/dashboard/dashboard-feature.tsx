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
    "5vKN5hYxEgHgf1DiUSDwGdyS4987QqrEcrPu4YRzARYnCzJENcPkSWecSmLcAZbrgcWpd6qydhdiSBHYXHhxNtzK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ce5TonP7r9UncXpNUujSWLito7bFMCcgnzMKta4XdfzyZ1pvYWPy65c7Jg7MmfTumLxpny3UaSzbCrsoRajeRBE",
  "key1": "4sjWKtQYs9fASNb3PuqABE9rx8vLxu6Uwf4MaAFZMroPLmr8wwYjQuPZvYKakzntxuSz5RH7hQbHksjBkDRkx9kE",
  "key2": "5YUBn9f7nRrU4QiNXsKhBDa88C6T2GFJNB4F8kRVnph4qL3MKAGdUU5cJmxeski83BFSEGYv9WDMnd6PjdxYexEe",
  "key3": "5KzUeakWyt9S3oKZMtPfrpfsh8gN7uGFzW2Q5WnT1LazB6u6jD1eyZGDZ2iV4FtsUhize1ieUsW84JCeFotRt9im",
  "key4": "4JArzqFVa2PjafuGhwgVVzzMyKJN17x2ZmfkXvbANbWukVtjEYvYqDauft7oPBmv9K23YK7N1ShwHegdPMqgp94S",
  "key5": "669dbbokAyfHNCHovDUuf66Fjb3fvw1Sw9mtXmRNkhVUifsqdvCfDNe1QUswbfXbSfoDEmEbjFmNLbgnPpf89gS2",
  "key6": "2hmXAcyYxhoXqV1PNKzcqqb9hLVmbFxAaVCJ1xseJ3NUw7WTvnKgXdBv9uLroHaeLviGFBWCXcMRgLyj5r8H4Aej",
  "key7": "iYAZYATgVT3oe4PPekZUtdbof795b1fAEcsQ5bNgUTS8BVcGHCn9yXH8ghELJPWLUF7WbmFaxUFd6BQTLxANXa8",
  "key8": "2xZdeM3FNxCo1t7LiadTB27k3UgruyedM3yfSfGvVh3PCq1DNWE8YGA5tSDqW4GSXUM82ZfPNnXwdArHwhCV7m7W",
  "key9": "5GH7Nb6cZ5NLvfwWrnaUSgwraHwchXe2b1sbkJmP5gK42XsMmSbqNuSBj7HYtQX4hfy1rPTQ3VkHvRN2hHCybGDm",
  "key10": "oVfdZHZo9MPkQXWhqpa7fT9rGzrZxC6f7oUKs1Sc4i65M3MvbBvdZ7u5Zmh5UquKaTRBr2wmN5Cn9dYH4owVpcE",
  "key11": "2K3ANHZT7vVXXCoFMYe9mp5hRFxD8r3sfqtpr94aKDnt5c3wGibu2WeoaBG3hST4oJsooAZWvpdeWEDbk4wR3heM",
  "key12": "5Drs1qWLDHUftWnGkYi92QKSCBez6eivKdiJZpUCuEAAci286zkwgouJmf57cvXJbv9P3DE1hT8gE3utbbcWVrgM",
  "key13": "rJCRPtZUBYjjsnGQ7UxT9bxTzG9729inKz4tbn7zdoz6akmGdx2XQHYryaxupSBMbwe3uLXT8VFAFyWwDAvGPcR",
  "key14": "3hQVewSXNEvo2G485Mo8FqbioSgjphE3swcWDwuwekeNMyRto96C6j9HUD5YPtjx83b9GWJ28uovbZdQzmFg8zzt",
  "key15": "62muyfinaswnUjMVfcBSAZXf6rdntgHjZGDNNRtJ6hANVX9nbSDGquNVs2HgNifsGnkZZjuijnxx6kPVFqdWgDkF",
  "key16": "vgjwx9V2BRPrrUxp8Z4MGGHx3JeF1j2DKEfJmwWu4SCQunmK5CfoPVaNA2sGYjuP8qSn5VQJM6e4tN8fDncAjQ3",
  "key17": "2NdLYngjZCGThTBMgNCjrGjY6m43SAsCdpSguq36Y6DjX89LYzSEEiYBMedf3ipKW5Bi7UFJQ3eVjffBQDrZoGXc",
  "key18": "3JhQmdooG1z4qsS2j9xJJomyhC1zMwpZ5Tg2mnDg88bQDcE9KmxgiMtskpLMo2knxsP6UfKtsMbHPFmaLQbFntnd",
  "key19": "57rZ1Fqrg8eLdrMzduq3HvmMY8vMaXCxDNyw5qN3dmkyATs6qffEWVfsw4qZEffuF6BJkbywQVLSvFU4xchcNtBV",
  "key20": "2xsDC9nukDtKuakZSZLhBZfSpBhNc97rpCbvdyWjpMsxsw2GxRCRzHN6i2GrHwYK3ooyYXj2VygCo4YnuaWfd4Lx",
  "key21": "4aUStmAMb1zv6GZBnoXBk1gr7pMW94hUk5uRwvB8mtWsvvLmQ6yr7rtfevG1ujcyRj7ni4GbbL4rFJwu3W4HWMks",
  "key22": "4rhMVatfX5wqj4CSZua78oc1vjSQDyNrmkvzaVYqFbkw5RXuxunFx1oDkGMj8nA2f7Ni2r7dXqFXgYP7KRn5H4A6",
  "key23": "5e7AnXqnjDEEoCkrqFUbmc1ZdDBkFrkEyTvmYoQmbw3VMA1UGyRNNmQQt1WE9ptLJMYohdgaoDvPekb4APPJ98Ha",
  "key24": "3osZTnFVDGt3vq4bn32yToKuPBHWxRzdx3BfEM8RcGktxF3R7VjkcXr2cfcPFRdg6hxpyKC5xX3L8XwwaQM7VYd",
  "key25": "2j5sCEFpcf1JBRSdidDCsTG4wWoAWzBjMo6WdGK2jh4hHPDmZYhxnkuKpW6H8nDExspZxc7uCiyKBgD1st4ctV9E",
  "key26": "5TMoeoB52BL8NzgNwbX23wkPsMCn6BD1WqAAsq6og3NVKkXzEDLee4j1NFHHnEqcQYH73qY3Rxbe8dJsjDKvokvB",
  "key27": "4u9nqQX4pYBLVwmnduP2ajDEornko4zzWAJhi2PfEvS7hoqrCx2h6QnToeMqB6J4fxEn4su4uPsHNiVhREqTBEVn",
  "key28": "3AMcreNE3Vktvr1NwZHHzJNpydBbW9G9uAdwj8Xk2Lm6N4PxEgeCc4Mfdy31rBgDTtQ5tQRth269FfmaXWyTbWjd",
  "key29": "4kALjYajdrU9S1MrTeD4VrYXHHwiZkrPiUJiQ5C1zme7cK73RR1iCNskhR59y6c3gkcwbeU7fMMZ8xwGXjUHbpL4",
  "key30": "2CVyfXZc9SapiEZeay7g2A8VAX4L6vnahAmiCSXDNKh6YL6T9ZzA8vfpE7T6EqAox66Ugn4vmmqJPAy7iymquLNe",
  "key31": "35kYXy9RTcJirwQvajWZpgoxxMDciciVqF24KKwW4k2NHASpFGLyFe1A3Q9s35JubGyo1LgTKcvEGgAs9JsaSKg8",
  "key32": "4dfj5UkLpQrqVj2zrGMr7SaGVw4SjBV6nbWCJQGW91AjUtMgeHA3wu2uByj8Nj4dbvDzoFk8QSKyRbwBW3NL3b3A",
  "key33": "sGZvwjHoXNEGUPSmcT7AH6B2oZtpqtdKRr7va1D1yYTvureA4WX7Wu8f6KkNMxesT4tLYg1cByd9oQa2qtWKB4j",
  "key34": "4bMb6PrKZZbm1zsaHYyUtiNPyRMnwouRD4FJfattsCQsT3L9PFjZsJBF6imasXQQ8iyXXJxB9m6Y9WKsuGJv8Bdf",
  "key35": "3JTokPDU1275CjtBt13QCNuLnH693TjAArYChpXpWwki8x3qftzqqgioCEgRRmXYUN8vpVdixedFByFdbYksXT8g",
  "key36": "5DTcMa57wb1QCWPEPWEkBi3SoTXPzaqDmC8JpgeiM7usggDvBfC4RbZ3hPC37UUjsVLkdBjG2e6VWyvwDHDXESfQ",
  "key37": "3JPqxr26sv9agBit5wj1VMUzKX2YUxjpcctEpsPtpiJRm1eCpNrCocqiozhKv8LSqA9U2Xx3Ktrit9CXUVE1kxyd",
  "key38": "4fB74P4dSYLgpWX3pdWrK2C7sUHYm8YqjVSbj15eQWxxymkWmoFZq1ainy2fo7sNzk1YYwZ91Ggde21hU2sULbwJ",
  "key39": "3gnaDnP8Aq9oY8NZxcgqS1KqcNQjBwXMGmbkK1ZksRtJBTGjGobpG68hmvMbJp1T5iVvsvpwnMrtZRyBXzbDok22",
  "key40": "2EaWD7uUuQKYyxUDvmmZt2EcqWfvnxsLTGras3PVkVjm7YvTSMg2WQQTrt5m2Dm78ZUkaNnCXgt3Ss1JRkkCrpLu",
  "key41": "5TRoraPNLJPuC6da37DAGrLrLxmRqHwnh6EhJHqMcXbpQvBXUrPzmhLy7as6Bz3pQkaw4MCLeKDEoC7i4RUEGNgP",
  "key42": "snkW2vTiqJyDiVRBuWv3sUQTyjfwWiJ1i1cG5uArE2G1DnzWjdNEWqqb42XxG5zmdk4ic5kEfjbwnBihTGyfpKk",
  "key43": "4ZzSBR43vPsTK4herwXgBcG823wf3dzvS4uzdazdzZQkLdVCrqYnic6cR532xaNiuouHkZTXkHd8nyDeKVXdzknD",
  "key44": "XpzUSvJ6kBLVXwJoQ7kKMbnXJqwdBad3a1HjbE8sodjKkmk7tpgV3tedNbNuB3shUu2dKBPrAghsATnnuDJ7r7z",
  "key45": "5QC3HAkDkidLigMc26DNqL2VDRgERsr9MnbDKvk8pHgUxnZ2rtw7zqCrkZXywDGn2bmTUbrNns9kDeinCvs2Jj7x",
  "key46": "2GpAyJEkN3PEaRFC9gNTR7f7r3oCrfztnkpZtb86Hej6FJs5mBmtxXZFBeoVnxnncK8qgx5mDqtrYGZnzEJT2aBN"
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
