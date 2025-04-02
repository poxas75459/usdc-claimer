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
    "52gbWPQo8hFF8MBcmq4kj5cBYK7EV339sXYFkmCWMoDg7dYmfijdR6KnE3dktx6hTN2obDqNsxrmNNBpjgXyVHE6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5M1TXNV4uiLE1pPjqgDLi9AHAA3Mwr29Z5nJtAiLgiDJroJkgq1zZ346mdkgiXcVJQLyfqKGmjC9xn5Em8Xnpr6h",
  "key1": "5JACKVJer9XEAKqQQnNVwCnPBLpKMTWTYimTuAUA4f6wFofCezALkZtWgZBsLB4JBQCEoM2pa6TQwKMhmPcTk4C9",
  "key2": "5Uoi3SJZuvmLpLFBTL12gD2T1Txq9UkfLQvbbjXuhKvQgDSpVByWbjkmYwGS1mQM9MCVdsbjD9YZBUwC7tYiqwde",
  "key3": "L1NgBqimpPNb1yxefgJ819fqtFJQKTRNp22Uz24QFe4xh3118wkRAD6MAEYjdHb5BvU45zEPQUQr46sn3RZxpzx",
  "key4": "aK5JSA8h2pk1tRcvG6zNR7FhDrWzDwmrRbK7FNeGGQyY9H4HHekWowdKtCaXk48i7FoYrQkgeib89oLpDe3SSaB",
  "key5": "4QdnoZPfVy6FsPweasLUSjsibAjyCvWN7QVuyiQYuag7S28KtyyJfFmk3CpW4db35tVdxKeNC7jP8DERYsDfH2g7",
  "key6": "2r7Ai51mcYxsMLjGuBcWj7PJRSCk9UcyVYoBtEi3Tu8gqzWkyKPS7GaK6LwQkGjmcUuWXCW3fG3Bhy5wYYfBESJr",
  "key7": "3Cb7w5LYr3vqiJD1RkpuC3FXijXmtxg9izkXfR76m9n3taSjNWmkqqUx6PmasQPTdcv9Ergj6rxXWi81GbXmoxAq",
  "key8": "3baiK58stgLYF6mBWJG5fbGoNpdqJ9HfePKkU7NnG7PCCzMj74EPcnqwwG5MHW1semGtpCsUCzm3KFEoU263tTQ4",
  "key9": "2pMcoyKuGgvaKww9b34A4R8kTKG3U3eKX68WJJSzi3vP9UNE9pvGdLyGEcBv8oLjC6pNJPc1oRw7CF1EP4tCUPt6",
  "key10": "5SuETvwhvcfVthexH2RTimrAQ6jo2siFb1SsYvBt4Ybz9yiJ54p1jNsSD7JiE1rv3KdEEogzhoGAW9AhiCa6Acnk",
  "key11": "5MfxBeDj7yxM11gaEYjW9d3WMUySju8NdmpsKGFoaHveN3yeMcWyH7xfSfTrTUJoDnUyCHwBbjGzXBjZSaHA346M",
  "key12": "4a162vomqNmrrFBtbYAREYBrn1CmeBmjNrdAW6C4uhcR2A2QpoZ7zFsjpnDtBAbbEHMdRMfyEmEvY7r4h45fUwin",
  "key13": "NTLBpML8Vx3LdVN9jRXhn646ebjViKP2UBFVyE5dPqfJjaSc3QZE7ccbv8M8DZzQNPdnPBdJcptXUU9N18WQNMS",
  "key14": "3EgGqtN6jUv3F3cbj3LjYUBtCHsXrFrDqDTqq6wcrEkSYjtRVt24xXsVvgwk4i8a4Kca4BhS7VNNCE6Wq1nQTAPw",
  "key15": "2uE3C9Dz64YM1krN2KbUeCGnMkSCXH4b5os1KCUyktZs5KJtisaB178nx5TW3KS89MgMGnsVJtsnh2zzy9TfG5gC",
  "key16": "522AJnLEvLQYoVaRvPDkWhFYc4wauqmLSFDLuWdik68htSbMB218oHFEoSWA7rvd9gEFx579sRz439zgrJDSFv4g",
  "key17": "3aHZbTtxa3waFjytdaDeQcMrBxyncVJ25R5YdrbKLSbZooxGCs6gRp2Hg1MQ4BmmTiyRvV8VmztstsnvUgc4S8es",
  "key18": "5Uw9GKmTjHbHuFPPXPEEDHZxAFDBCKdDfreSzvzs5WRDRsnsT1NA3Jxw9628h5sYaXuvghMqGV1ye3ApPQhS421J",
  "key19": "Ttm137JyoopjiKNv1QoVFdVUhouXo2292hzrM4mXiRE7znaFZAL5BwMp8euJAh41iGrUSaKgRC5gNkVPq8r2TdT",
  "key20": "4XmWWCh4QePFGoJM88seMeGuA5j2AguTKXjTjir1FjXRRm43RNhJM2ZRYNYURP39as3VgHP7nZhE9wkfWo97eXGQ",
  "key21": "4C2obmoUCqUc5aLFPwH7X4A4e6rVHByHNbb1XAynTRoDv2yyLTX5xiscbj3YwzxbaBts3qyLF3NejbBo7LqN7oyw",
  "key22": "4xHcRkcPdWk74T1BY1KPJTBosEayMG8Nqnbck77Eh4VCpYS6N1FnaTULPwAU7cFJ3r1Sg9fCX2YX33hQ5kPkXzq",
  "key23": "4G29CWpVff4GTfJ9brdpJmbBz5G2cCixfNcrsHxMzDpadf366s8p5YDmH255bj23LN9eUneZ1KvQ977W9VGJK9QV",
  "key24": "yxmGEfCtHRHm9wqqwoQ79Db739F5VJJtQm8S8Hq4mEL4W5JpcaXRH6pjEZsJr5UBdAp5c8vbyvZhFAxhsne1bSZ",
  "key25": "4JndiUVN5vNSndSDMdaNZsp9JWS7Dk17nzDUjvD2dwQHsUztBcei63EzCSr6vDFLrNEU1DapQMUBeoCURqYsxSFS",
  "key26": "4NqqTA2nYrX3k9gB14FtKfcHNNeZwYuNTGs4DvNe4XCb3xqGXFBSZhXVvMkS4Lpg8FvahnAQ6sX3AmCyUezjYNHZ",
  "key27": "RZcQ5Ump9GtLWTu3KtGMcpG9ZqozMKMc9G7LZTqZStTxJBivYNBtk7eSTWMGkwEbyvDZnvxRq13bfMsLpfYtnZS",
  "key28": "2JseCxVkt7vXVoLrCzFM4MW7fdJ84P4GGWQPMh8ub398DbL94EJF4ZBvDf7AHodXbx2mXRqUx6ahubx284sf7jEa",
  "key29": "2k79WoaehwmhMjZ7ucfc9Yq5Ejs9tvWJ31b3cY18ZKKAgbxFyz8fyNdNSZTpUfNxnDue8bkxskEjsuDyfXduNHW7",
  "key30": "26z45fmQD6m5CcxtJige9YPj8qdm8vD61U7CQpqa2HJAN5u1VYmG3hkqzQdJYJNE5cTTMPrS5xM9XVBMKnXhzkfi",
  "key31": "5Z8fdcVnr8nNQhNSHmkXqYPxY265JT2F2g7drmAR8KuabRg9Px4q3G3AtQDkBsmc4RTh9gYQZNEo5TY2XCfsTpZm"
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
