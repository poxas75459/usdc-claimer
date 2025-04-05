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
    "3WPtYwZNiq7F2sRMBz37Af4nBwcPnJ89mYvrHjq3oaxDJv5dShcf4hih5QLSGKUk8GDc6aNduGwX6y1N15uf9v7z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4C6BTYa31WzrPkPP2G1211aav7yGpGa8FdAR2WyNeXzAqWPbjxKR2HtUzNgqpdAP2vhwEaynKM81WjQGWmQX1ign",
  "key1": "2Pepap3PPj93dqZQrjFgmYyASMtpaNyEXJiJHtHM4T9mDNevyJiimo7kX2gs8qgPs2P3yYnh7XhQRTRHkj66BMep",
  "key2": "3AARAYsVQr8AmBAYrqUFVqZpH2y6yFHTCdBGUL96vGAHeDNf54kVyDj55ra5doc8mrhWyqxouyZeyZ5sKk1sX5BH",
  "key3": "oD8ceRJRFkQkiVtZGyvuJzn1ENAsfjwG8KP8gL2vLXPYtjcHjQpKsciytNX8ErJkp8FPZHVMmMTQh1bsG7Z7yFc",
  "key4": "nc3nbJHMWxeNTFRMtoSz2TchpnLCKBr5cK6JYne6HDsLSUkTXUCVPUTENfPQEZePhKt8c458KwrccET1bJc6pkL",
  "key5": "F2ns7jNvYNrq3TW2v1kYkT7HJQ4RiKtUnEMK6FVwgqMxEskHpSZDeZowJEMmgLdsxYgEoaQV82K4xBt8dwHgjzw",
  "key6": "4gpjvAuqHx9n5oRgHenAEhGVUvs6AkA5RSHL3NLPgwgn8AAVYBpQufQheES1mXLPDTm1whBTt9vpkKiEqEC4xw2V",
  "key7": "2FcxbgWAWWqtWzzbpujRGqMgTH5v9GvoxWnr4kEvzJFzB2JpSft4C73AwNYaaCYR7eDhhEeX5hi8agNg9WDs3PHs",
  "key8": "4EUBMaPuDqMNbFEdeGZvXhDr78VSs2fupKSCTELYvgktgczFR6oyATAvvC5jZ6m2RX8SSAm5Nai6HD9DnpyQKTrJ",
  "key9": "Taa17ncWY3MMsw54yQCMQXR2qDKVEMU9kAViNw7tdLZC3G3wnoj8wnkfCrzzGRvtygMTdvN1pBJJeVQiy6h3kro",
  "key10": "RDpK4yjUaVjggFAgobQsLJbEozntX3ipaRP7Sr3Q4LPYvza2uc7PDCmpjq81oq1c8nP3AeTcbtc1PiMoGKRbvHu",
  "key11": "2uMuX7mc7dji7n7kDpuTgFnQMP75k3Dwc59uh8WDsNm3L99wPkQsxUo9rA2c1feiRrr4JAZBmJSmyLEj8o7KthGi",
  "key12": "21oNKgGJ9k4h6nj3dyDSeTtzw9LVW3s3cNAV8nsqEH7tBJtcdPSstosFWVaRJZcWvyp3x95BFST5dnohfJyUQTLJ",
  "key13": "4HV7octbbeUsWN31qrJUWjbJgXkJJoYPnMSttYSTcbyGc2yx5qQfZuCFBbufHRuXKqmHojrMQcQzZzrrDUn4jybL",
  "key14": "31Bz1xhyte7PSMF4EjxTo8PkjsVZLhxX2mHGUiYVJGnBZVqjGSxrnJvK2MJ4Zb5SWRzh8hmnZSd78vj6i4BSN9Tc",
  "key15": "AWv7GtvDxqzKh9vDQp4VxBpRd2yeYFzQGB9VvicY451svg8qrsumU27rKMpznbsToJnxbckDgZxjYg46C3aVzyk",
  "key16": "5AVbXCwkkYVYJWJn748cA6RVV4UabVpgQ7BhbJy7KBEM47eKsuoEAoe4PoBgLMv1oLsF9ptVNR4qPxjzPpLQcRRQ",
  "key17": "2H68wwnLeZhpqXuniTyk4qkR5tno6PdZJ9WGPwbqgHoN61zjb6Hqd4fxHN9BMZV6L18uPutCS3SED4CRG16RCSp2",
  "key18": "5BASrSYd6cdMpNbEMcT2k8PWCWnLbqz8iHCEPvTK9BoveBkYR6VXWhEPB5sfangHWSfzdQr13pYYo3vP79srqnMK",
  "key19": "5LJ6JAq9XZ64t98DJuKdAuGcnrVEDMjW5xYr1jZpT5RgPPzFoAmggmSAW5QQ1KYaGPzPnxbFz2hJjTw7aP9QrmnW",
  "key20": "4bD4keTUYpLfvZTjvMaX2cUBZjKmPw1n9SsytJTWhdZ1z6L4eQBJhnHwSyAuVHcNQzz1pfj9WpGYyaVpVCx9NseY",
  "key21": "apjt49jknR9x5Si2PACu4G7TY8Y34Q5hCXs366epZ7EnP5x7jiqXJrhQKFkKz1YVgrvxMNEbri6puReq1T6Gxu1",
  "key22": "5Z1N7193GzrKadskJ84X8hWwFuJwDKSgPFh78b6DkWbVNA87YL2KgDGRy5eU5nK1xyC9BnwQKogBybRVLacnukdw",
  "key23": "2hDNQnvJeTr2jUFtrWZveF4SWFanSmoPjkEdcCgYNWwvt1M8oXtq1bYo4JoJhAcqmkFhYP2Hc777gfBa6s4aGTku",
  "key24": "2TsCBu5HWsczSCgkdj5oZ18pzjmqnfHMvHYKFoE67WrfFaEi9UnbeWvC9zAyZ5auSFvg7hPXvaytFQD1XnsckFQT",
  "key25": "5cwM4qRgw2Cod3KbwsWSwzgJssLRmhDEU1TGSscngUn2xWf2F93kMUZnm5b4VyuvL6YiVSCu9yQP5YFzJAKaBDLR",
  "key26": "5NYYsRqfpEokj3PNQySFp4SivBjJfXg7nKGGqL5EAjcgCLbJVACNyHksfuUFNTaa1BsauTtTBwUkw8nAUNJXiJdH",
  "key27": "4indTqKm4Pq45Tva4g7zxhkkL6kQM8tZfi8tUnGLBYoSsrTJ9MKrn2krFrRSMbJ2F9tEMBsKSiij7z3NRtu4rm7X",
  "key28": "28vjUSk7TbvePWhWHTgh2xwkwBRCrhViAWY4rwGmaGFAURvFzcyaKy4XvaLjN4L2Nv42qwmDk5cYAKmnMfNrh5oz",
  "key29": "2FTHsdPaHrmLdy7cUYfpj7UhP4piVZ7sVD4cUVhCgYByjRSF195v4mTnKySgZwYdVh7kDPWxbYhwJzRAqZn43tDv"
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
