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
    "2ebXZAb5566HaRREMgJgNmfcXtEjLWQ5hUCxNumiW6WnX8hKdp9hiFyutWRvUAWwg4pBu1LLyKUes3Sb1Js5J5H6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3eviSnSeDEPm2u8EfLTpWMwUpPFxok8wzqJFtvXxDdfAAVMfMUY2vP5UAnpqhT8qhMW1ynmDF8gs2wTT5uKUMo7n",
  "key1": "sAsUUkd8LbpYax2unTe5HfxYdLQ5eVeuXLgP7hdubfV8YT9sqwnaiXKcJZFSZS8MCksQ4MjHZ4dybNTrK8cjoJt",
  "key2": "B1HyBWu5E8HhJc2mZF43XrVmaXFo2Cr2MJh8pSFSEW1sW7UWDE6xjpAsGtatUFJU6wy4cLefCh5gVbPsGGukTqN",
  "key3": "4278sJy7R1h4aXmaE2hjvV9SC2Jj9ZPastMxJpH3wCFwWEnCDM8QtydVfZquGK4VHwJaLLwn4W8riYiVNsTdJpcB",
  "key4": "5ooPhKsdQwjNWBSA49BqbB3UCL1hrGK15VpTMzNrNdwWv8ekLSZbjh7goRDyC65sMFZTjr8BpW7vbGPLBeBZzYYv",
  "key5": "4KJMPtPjcCU1hx4WazMFMwJr4VuCvH7M6JL2U9DqdS8PEf7mD9zEhLPDytvcwPXHjpsks5KSLgxHEY3MYCL2nMDS",
  "key6": "5vurp61DbiQRErspuW6LNQH6CESb9X538nFLqz7pjxv4acP7knwrUnBhjhQDQVDG5HH4Hsnz36fqbsgKpUh6vjfR",
  "key7": "3yiXdmih1goha78uTjE3mnzwZP2NLH72413NZ8DsSvFAmqLtJNGWoXVUchjTHUq5i6QqEzGb4AKaajD41SDSK8Pw",
  "key8": "ZJQD3MuM7J3m8N4Cey7XtPm6qD6HFrhiEYyUXsBS3Fzx1TEdQom1HhaMywEy27NJWYSWDiTS1RVcSVw3RcfrsTV",
  "key9": "2QJNezfSmtcBiwaMpbTpczp4pX4fcMfsnfVKQzjjAkhbQX72wMRsQfL6sHAJPGJkdWDcn6WsmYvReEkgQ5qmQWV8",
  "key10": "4q179kHFLb8CuErr572f8zt18LmvHTZxH1Lx2vkCaCAiPf4RE9ThrDpuvdgDsaD5HwSG7iXDMeZ9V3VZU5ez6sEy",
  "key11": "4qdWMRumkNAj8PF2BN2khCejoQboTMbkLG3oWxaGoCPyoLLsj7C14hahcQWti5sWSVFtjFtxUrdnHzS7FaaEaCfu",
  "key12": "3KBTn1bN9kg83g73w34UR12CGSTvXSVczEUkpiJEstF3VePb8YF8J2yNMUDzqMVzU6dJhTckd3cy7L87DChkjXne",
  "key13": "61owu6g3gGKannJzxrrBr36rRAcCFxdiNvcHgz417xm8PUvujWVUbEGSnCZDXguhU3ypfEvLKzBuwJp6pdyaoTKJ",
  "key14": "4octfNXs7jGo3wySs5Eg66Rqmz7a3EdkdaHk6r71DkuC1GQih45KE6R4SeEg4jubrgJt4iSSXZYHnWNMsvPVVQKr",
  "key15": "5BgpHGc5uuSZPcYEYTTAZRET2H98MhmpQqEC9gqwcvGE6cSGnEfGfLCXDesgFGuCBeo9WfXFtvaAts1S17BYGdAt",
  "key16": "4SgWotfZpQ7beKGoWDz27R5GRqnxQMsMZ7bF4bZUEHn1HC1rt2tDHrVxpvPU1JK668hXok3Vzw92MrDgyKc2wBJX",
  "key17": "4CZ5Byc7YHpgEQVsXCy6Sfh92vLE6PHXCLbf2Fy2gvDqzg7oPc7LHPGcgosWMH18hyF1wq68K9oJ7KmAJMgkuEpP",
  "key18": "4QFFxGXt2YgzqxHN7fgv1YFwaegFYmxTmGFNAACuR8twGfdt7PyZNhmejTuaUWaZw7tns5oKBDjNo87AtqarbWbs",
  "key19": "2p76H1iKvB9P5GYrq6ZSjpkKayKwWdVTy2cn1Q8PA34JxqdBfR1P7njQnJD5KBbEzKM2YM7hi7pPfrRFJVnrpgxp",
  "key20": "23HQrTWNhjCFc9REgPBQy1f4N85LnxR9ms8cQF9BNhrFR6e4fX4RTPKbLYNqqU1ispvJPUoaJdjRbAG8N2dbDVgK",
  "key21": "5S7WeUa7DwpycteU5jcURFEDfWQEBeUHYcGro7EjQuZyMZSf9u2Hp1NeA3kEEdkr6aNULNVDzo84ESYvesy6h1q9",
  "key22": "5wbwRzXiDxcNopwTjfhr4hue9s3VH6tXZyGX7HaGVtygYQZQhkVA6y3N1Z5B3kEjxejWyk3DnXXVcGgPqDPWKMav",
  "key23": "2p8s3jUUiQUDFC8ect5RaWeff6iu67tdJ8WiJXitRfwbY4DTsTZWGZRfnmgtMBo4Nd9csKcXiqJG4yjjM2t6nrnr",
  "key24": "4gs62hYUwJfreuXY9n3dMQRbXGaZG3P7Dxq2q3sbYLfVPYMWdP1E5Xs2CttPQoNaXBo3NLydAM8KNSr7sdnCwqgq",
  "key25": "5pKsTbvQGZ8bUhQpb6gJfV7j5dMv46RmwswSuMfh3hUDarT8Zirvk2x2xeCUmZqxDgpqGPMQRYT9wuNwkFoXg7fF",
  "key26": "5VtocBSAsipt2juK5TMMBtw7f8TK6i99rpe17zQfDDSFQ5b74tXwxrwmzkk7M5WFjYiocZeKUDhu895gXBPyrKAu",
  "key27": "37268WaEDuxfTmGFmdpHDAZG9YjoneeQf55Av7zjNwyUMHxmVmoERzdtgLeeTjWLnGK43Bwq4dbiLm5VnQXaNsUU",
  "key28": "2ggMjseM6W7MWrjmR3Z9EZYwWNHThmtqgnJdsuEfzYn4wce3zGwup37tWuBj9ENUKtJbGWUicBqJs9KREiJ9gfo5",
  "key29": "46wKFsDQUb4fnhF4cd64MfZzgYNBR5TsQ3qiQB27vrzZ5MC1SRuifkFR3tLW6JDMzLpfzfkW3LXw7aZhpeNcRJVW",
  "key30": "5gPDLi1EHS2YkgqcCZDqLoyzBv5fG792Gyz7tvDeJa9VPrN2rMTwXDEDBBZp4CxpCtZjQNEgfwaT2nLLnSGqEBLv",
  "key31": "1pUutStxvMg15mwVHZJ5RKbVkykM3wSgVjzLnCopgWXKQMP2H4zZTr9HyhEe33wGNNEz6SAx9cVKEj1jS34WugE"
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
