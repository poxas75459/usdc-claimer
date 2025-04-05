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
    "5WFiRg6PEipBnTXNFh4RmHqo2c2TpnQr67JVX6DctFDvFdDkqgWVsbEq5kbeSK29B1WfKTp1M5kMCdCMT7XHb8Um"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kTM3sq8Le2rqo1BgUiXUDJ4ViDAamdfJCkcGEn4YdKgGqiPmjSMVBVVkNmrJRfeDFo42X2FnpQY6Eprwng4eiv5",
  "key1": "KapgnXKjxUkntrPcGLgCkd1tUmQa9r1eFtTgqCWLHErqJYvTNMh1Dnue11z9XogXMSRgzAvpMf3KMNZ2SkoXeTX",
  "key2": "2uCXjGPioj2yxTc7kGYWAioE2DC2SxcUTnpmv1asWHNzfSmRRC58EcA9PjkvxFF2XiT6EgdmHaSCyyWiWvM8LFAh",
  "key3": "4muAkpZG7dUakEw17PmWGCoeNnTJxCNTVjEVwSd1DdrbAtwPwH2EqirfRphZZkrTA9UwPs26zaRg9J8G7druPK7S",
  "key4": "3nrUnCgDkPiQWgxXmVyhygrGtGMsmDC9Vfw58bXps8NFoGfkWujrc8RzyE5DAiETHYGbvhzrzn8XSQbjZd9wNYsa",
  "key5": "3QitPcGtChJ8HstMfonwmVAB1CniqCu7VhWV34kmJFpD52AviSh36kRCTHzh1e9VHPMFrtU8ZcnUua9Dq51XRuug",
  "key6": "2FKAZ9jeaHyoMC4tuCof8boS6gpH9kLxUnvHZSyKzzaxKx5yJjqLGMZZEh74vqxPEHh6WY2gbtfX3SSDP82Bj47f",
  "key7": "5KjiMR4GeTTRTyh5DVR46SM7TSWBmrtyWLzMCy5kPQvQQXaKEXGk1jzwBsYsmuwgCEtjydUheGEYd76btgmRKZXG",
  "key8": "2zYFhPpnYFWsybFoWafbpwQrGYrn5qvMu2TyF7nbcgmFrbYqdbZfj2gBCRAmroDoXrJNGicPXxbU6XnJmbg2B93e",
  "key9": "4fUKBHhQ9EB68w1D6UDJjyBvidMfsRJmsmhH9cmBpUb3nWAP8328R7mm2Zno9yLbtuP9pSUUcgcT24u22Vy5ySTr",
  "key10": "2UuPBiqBhRjxduJbtNK6jUxkaeLnKjfStMBUcpCyiod98tEu12cg3Eg9Yrq8wTDQQDHzxDLEJwC5BoPwboTEamcG",
  "key11": "4W1eQxepzXpatBzXLSHQPh3x8Nt7zYnaq2nX9iUXh1rNP8eUsHdThM6n8wjqbw9NXSM6qT2R13j6bExCpFxCzL4q",
  "key12": "2ajRwwHTyzMsFvu4bXXYjosZNhutDpGFhoTTB1N6tbUqFHupycJhscYnbtMTjt3pb7y9BoDpudXnSWcDi26QegnK",
  "key13": "2tmEcEKo3iXd9pmveVn3NPQprxa8d1qPwrBcuoAaepyjFgvvadyBAyUcXZjPpQHhzJ23nEmVbnzQ21MjLd7RaNV7",
  "key14": "4GzxHoQf71qB7ZKBCkRuc15QGCRkMJFhTyBsVMBrwGShkuWjqteuXcvE5E5JbZjZZAWystF8XmkntTHFLuSzkgUX",
  "key15": "GjUDoMCdBepPHQRfwfqkELZZn3pfXDC1PG6yaZu5jJGrLJf445Y3aJSDaQKWdLwzMkCeKsi7RUSs8SqvNnCyg2L",
  "key16": "4dmcHkPWodqfAMaxjCTmH4T6cqGXmg6S6xLJ6fVK3RffywEdqw7Tz2hCCHKc6ZsAnnuv6S6zycACdguL4dNnZ141",
  "key17": "2dGCGJGv9py6gRALzu2F218M14vn4n5XMJJWzi2yiUNmiurUojrxTSWdMipTkGZuyMzgUAVyXohUVuM3ecRnsFFC",
  "key18": "49S9NDSbDZb34GGRXFGBErC2FNnwK4f97whKqMTpvSTafaCFkgqaU35jzATt4NkpWYEpcRCand3nyNDUXH5Zrv3F",
  "key19": "4fjJc61858HrissDFJuVhvPFgkXed4PJ3BTYHcDbNKsQaP3r81Tj4GgjoRMD628RadujQABGqrkU3ZpaF5o1Lftp",
  "key20": "4B3CXJ9SCipcNAR4PvTNywLLaxke3YMAppXpRPJ3WeaHjEAwfj6FvEUSuUabc1mQtNRfZJoj7ikZ8FQ1ChtftAXj",
  "key21": "4jHXgENAApTuUW1mfxKTPad9gxz1whxG355gHLBp2GXawT5yGWs4B4HZHCdrTCEywCeMLY2KgF4DG1d7coJVH8a3",
  "key22": "62gG27FkfNjVhH29zSVAyMgnbfPFMNTw5EkMRhGoQk1iNJ8pYC5diPU3GEfNAWMNZkTBxyPyHrZtLXunrF98NNds",
  "key23": "46SSZ1QE321XANtSwvdmmoBFT5EoisVpxM35SKaWXRz6SF6MQjjTyJG9SUa1Bmapp1oqnutcgL1vp11SdPNcpeK7",
  "key24": "8RXU2PdrzG2vovRqHGs9fNKV2dc9mj6AijERCY5kxgqZRUgQvjq6Peco1Gozbw3X1uwsbJbCoGX1iN5ncXAopfn",
  "key25": "bqtXKGcCPZdeyBdWUMpcYPQFCYwLYBDbPPasZapYdbb1coUu19qqh8YNXSymsov6RC5Ep9wHBB8cJ7Vacd9D9He",
  "key26": "4nQFhRTKasoDKfxZvpqNhWfY2AV9Q9LhfpWy9ymXX5t2sCUXa2jm1kmCHmHsPpu5uw57D4LGAMqLZcyLhbyaWDo1",
  "key27": "4drWUBTEh4WpRs1QggiKfYyCXbTg8Znm5KuhcgBTS8EfqwjJnZjLx1zH3sm6atwgjYS54FdheCZ3eSw6Vy1sAJQ3",
  "key28": "eppnHMrBGFF3yHoX7nmnJn22TGLcPk5PG8k7DyYsDjEpyETwx6bmpBA2s7jpx7EDdck1rjcUJCUAidoG913TxPM",
  "key29": "RkzrC7PczuH7WvQ34yKM76HKUMqPAdsx3AqGispDJq3n1QVJS4m9SBn8gWZQMapqbsbPnSXjVQKAgHdxbLqqZL7",
  "key30": "4rYbdCfXp4aiE16ytsT2HKxZMeeBDcwievYSSHWuLWy7GvsMYC7zsjy5HW6ctXFYoaQ92pw9QRVJwnjqnjW2TNvD"
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
