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
    "5S7wfG6X1xKg2XGaK1WqDijjGj8krXA5wyi2y63fRxLAEfzLibi8Atrd26U8QtDwnh9iR386SU1bkNG9FBWCPEtm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UduubhK2bcqxXSCwhknAbCBN2ZTifuhFGBCDSyt3PQkUgVpvwDC1pTaeug74Kgzqoi7Nkr68iFiHGJnWimxyGTZ",
  "key1": "g4o2s1d8zZvnsZbsyQ61KdqvNVMQZxWgotic4kjqLkTtLpJz5qHVczMPAgoEYP91CoUZusLUoMjMYAFgzxijK2g",
  "key2": "Gjz5X6Kua34oD2mVf38pgMbJaBpMvQGix64qde7UG9GrXjNrgDYD2xkWFdC2fSm7czy3Dxd3sijon1jbF42tySW",
  "key3": "4etsf8e2QzLXH2AFvddfXpGoNz5YbTnTgKnEpnnq2rRfo4kBePkJW3Wqr6j8Dew6EDWhetr6m7bHLEHKeUbSxqfb",
  "key4": "2sc6mCnshucWEDJtvMUrpkicrMcNZfMppR9vSJZtELQPcdLkjLSRAwh6FdrKZ52iJ9FNRYrE22JszzqmMJqNXNFf",
  "key5": "4qr9FpwkPtSd5sJMHKRRtfMxz8FXvQuB3biFrkccmgabdUvfHdNZtiufHbpU1tAZvzwP3oSRyYrYvHBFRAebtU2E",
  "key6": "3Kwg1zWiEe7vW9kXp9uVgNxgocWYcS5dudndMPLYL7t3u6nZHa1bT7jfsuee8gbKQXe5Foi5W6Kw5w3khNkvvyGx",
  "key7": "64MvE8tr3S8uUXXPWctMCY8pu9n2JJoP1rouUF88T92bNYrktd1z32FbxGXK2fbiBUx8PPyPruR4UtaXQ95j312Q",
  "key8": "4qkun9Vi1My5uG8yM1azQAddmFhbFVJes4f8heyUm1bvEMLCBJpSS63RFCcycq61FJHymPqY1RCuKewU7kAQoRDr",
  "key9": "4Z9YkYhr1uDJcqzbqVGmLJJgSX3eGky97eNSfkUNhCiby7E1idqT1iea8iS9Gike8vJnmwYt3abjqR1rGRs6DF5r",
  "key10": "44rRkpEih4oyyhVZFBeLNbBWuh3RZki1MMkewLGHXk4M9b34Uxc51p5Nvyikbw8TpTdUiJRcerbdESyNzdQNFz7H",
  "key11": "4ioDwye8mrWVtmDTeLZwfk7qeSM3F2CiVRDgQKtqQsvcbbxkYVWhHByNEUNy8T3XMNpZHnw1rFJ5g3RgxRq345Ad",
  "key12": "351PMxTNt4tsvRrVPzfRD8f5M573DBqSxApeDob3nRs5wbKD28octGhNBiR1nYAP4bu3nauCH5WniX7WMu8i1Zuc",
  "key13": "5KD6WaEo8k3md2TT1NxNRmVYMit6kViKWbukb8eTsp544JzKuYt2SEWh6FBfcFjHbGw2pdW4rwhBPUMkmjp5GUhn",
  "key14": "2yBNvhnmjoicukCRCsy1MU8z6ietHQViqueigfGdPDRW75eWqJ5S6uvJBMEwdWGrTPrvic5eR6cmsVRoNQmC7rVh",
  "key15": "tiSpwBdKxNpWUJnWj7v4fAWZEPb26mWzzcDVdMGh3HmUo5SihqYceFWK9ZSk1KfSrr76XG19NP24GmAiJr2fpEM",
  "key16": "DFModKDEYyJSCkRtcLCr32VpjCGAQP9pUTjnRyPUMoSzgLt1RMaETj6Z6KghrnjWHSW2YGDUuFtv7XKyKTJoqz1",
  "key17": "5Czeww46kQvebHD6esAEf4nNepSBd4tMY7Z3q7jBBn1tAyDPBD5tzAbVnCjcD5koQZAM4SGjcGRn1DU7owcTTFr3",
  "key18": "5ZQE9x3Ucu7KG3x2GHWc9cwP6pgAQDFnn7GiRcMEgAcjYefvFAJzC6JS9AHtjRzK6KzLN9PMmn9ZTA79smCreoyV",
  "key19": "2cvrvCE7rbbygi5Hgzw1cMZVEM95Dx7PHhNqnwsQbdnsmT1fqPi7a4BbJzDeE2PJ6qkNxieAhpP4xA9VwMxdBciE",
  "key20": "5X4EKDCNVfYoSqxd5VFHhHoo8TheDRNfvWERHE1SVwpgVDigSQ3hVAVQcFeUfFFiaFcPFR33eNJ7b3NpHG9GXM7a",
  "key21": "56fsw5M26G1XKxUB9UFaaoSxtwJABiVSBk28DpgbiYXX3aVqMobvYNccdJVzEH5itWEhFsunHngWc49JSdC2ae4B",
  "key22": "2nXGSqh7pk13GB4K5fkBCnk2e3u1V5JM3uNdnozwCC1YmQEHNqCJt2sUYWR8BpJRBBfMdQ6PmLGAjkivML36PGji",
  "key23": "52H9JF3dxxJjZyrb1K4kuB5CFFyvziE8KZ1R2hSMFD4tFCTnK8N42hKBAbwYVZnm3szECNiswVztBxEU6doad2dH",
  "key24": "2msk9gPP82rV7Jyfxoy5AnbmB8hkMgDj2YLJi6MXNsHPjV3d3DmWsSjjmgUVXnCfWx65BpXk3t51Qz22YjvuNvtq",
  "key25": "31N3qt9mTBDRkMyXBHbVQe4rqisVtf4GujnYtgCa3Lz6xGnfeGV7FzN7NQ2DoGv4VqpXbXTxHkbn33NNxnzNfhGd",
  "key26": "2kYpF7RWFUmELLs63YmcvX1ESR3t53LXcpYmhKD8h43yV64D6Xch5yC7Xx7X7jKwcGTdZTo6BS4Y1AzjJmHTXKWV",
  "key27": "5R33TMfrex4DKEYZbwhVzzDb7TTticpLr3Qt712AD7LxRJcmbMz4DZ2DuL6y88dWbG4URHMTZjwtTzb6CnF4NiF1",
  "key28": "zcpp2azCzWSVmt6wXzPhpSoEXWNk86AcNDS7XB9VCRkqiHiyeA7TW5juJqov5aQ3suwYrErJwG5fAXXDeEeSMmV",
  "key29": "5p4AvixSNBLVTnNBXohtAwLAG5345Zx5g85pAw1j7BoUT4Md937AXSArAtXPbGpoacjmyr6CYMVY52gwKC2PaMZz",
  "key30": "5Hhn8eBDKsuev7MxcpchYBxq8mN3L9r5StEmhhMhy7SiNF8su1ejhnfmQztf4Pp7sc8gRytoAEcMwYC7jnre7ov7",
  "key31": "GBm3FAaTJMu8EcKeKMAcqZ8Evttc4iZiiiE9dFnWXeXur3YLS3qxuZyYDAdzNKxiLTKou2VMPK2b9Qz1vdf78tx",
  "key32": "498v9xtfaEoRKT3nwPcEXB9NMV7y2DH8BJfELQfFhpmPXBUcvBgHrVPkC5k9FcsXbbjovQVdW8CU5xWr67N3tBjR",
  "key33": "3dJrnjtR5LBpxkv7CBRSMEtTXSkPetmL4V2eR9AyWRLBQ7ioPpCRsh3keTkfSujMPoTYEviDg4r4ifsgV62YR3PP",
  "key34": "5dCEy223TQQHrYpzJayFZVu6F76Fa1w4H23UzzyvuYPAqugt5cWn37TDtGCnEs9hSkUFY9oTzfCgrAQHZPbsGDkS",
  "key35": "fjfADqeUtdXpsgXQAebqk2VxfwYPiR3uUFpwpNeRgDeikXS83yNL4afHb31CFD5zcrQCbnK6kjtYzpgY5H9dnZQ",
  "key36": "5sHfEuCjw2w3D3iJR3VPEWRZXpHTeHZ5XiNJ5Tg7BUpt6sgTmY4MNa8MwTUdU3LAp42NL6UwvYaR6HBDJmL95jwf",
  "key37": "21QJ1mo85u6qn3QTPH7Puj2b1rBTNL2DdoPvDkow8tuQDEFgLk4z4NtU2ZNAXcFPtmSYRDdq4NPbwRT4Bocqq2ir",
  "key38": "5odwFZ8iWw5WjhAbQfVPCGa31bJ1ofxgAejj3mgzy1kmhEavSTovSkRF3mk49tqCiXWGyLGqfdrTQm1otvHRKmq5",
  "key39": "59LBpuJrsQ7PvQtGcUV8EJhJ4e1kYkPFQdZW5smGqM3AQ96ptVQREEce12pJfvzBzYzfRVm6USrucx1ieC9gmSQu",
  "key40": "QKixT4gqdH25rE8Hu5V8tdWzfUgLWK1Jag4rHAti8e5bRBwJBdVpBjKAzptqnfjuVTCDtkJ2mogeWs4ZrRUqciq",
  "key41": "4ttHw2BZxjSUNwgejUZ2HNSYKAo6xvs5UepNwM3nDDFoYmvMYtv2Tjj2euMvJ93jkADV1Eqqwi3k2hrkT7CeNFGj"
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
