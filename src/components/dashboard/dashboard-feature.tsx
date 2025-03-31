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
    "4yaYAkV3Lt7s7tNW2eJrUVrre4WKZQcd2QUroE5yHgCqNQEi5d4ssVuY7LKNsADN513AVmogzbsRgsEeFtcYtCYn"

// DECOY_KEYS_START
// These keys are intentionally exposed as decoys
const decoyKeys = {
  "decoyKey0": "2pmrY9NnKdTpQmbdj8EPGCfwdqe6hVmrMJLMphwfSjBtAcx7RpqaAYitQERdMDPdFiYfEmv6vciQQUtosJvc9nuy",
  "decoyKey1": "3JBKDjdQkRWhhNjiivv2ZtjBcaEwv8bQGMMGvrEHoR9A8t9oqk7J18UHKK7dTVyAzMrYzs2oL2YiMw7hRWg6eoRj",
  "decoyKey2": "5GDwu1HeZK1kvnRDsHrJz76zTWuLBLDV6zzvdy5s4BnLjMCnZVHznjLYQtLAcSu7h3SEg3P6kdUjNAUKKjnn2d3D",
  "decoyKey3": "2nf2LmDp4FZcNTi3jR3Cg4NvrtNv1xYGGfKbzPaHjaBHpyQ4SnuH5YnMTx8rJbQj35R2G69vXiwvheWtLA1bWJSX",
  "decoyKey4": "28UmYbFzFTNvVLMxW4V9sYxEecEqmqzLZL3rPNokGWeGvtkbzNUNFbrHX2RBiKTGciPjYZHFv5wokDDyWXGS5fSS",
  "decoyKey5": "2caqyGuq6CbCbzvc7sjeHXLvf2xdzEoMyjd5zvLHX5mrEaDAzD3vgadehGk9jdunVu8qBr5rJyre8YRmoMKMNLK",
  "decoyKey6": "eCKW6G6K278spWZ8PBUL6R7H5qMzXEvGyasEpK3uTy5xweSZBZztiGttpnwYfchDPLYyLSFmf1GZAUMjDv8QXXm",
  "decoyKey7": "4nHkgjn86XAvPVEjWnNc3uSKzr3rFRzP9kWtXU9PHsUqiYHwGgaFLZZKDDsjFvpvKtBZxj9wPV8sERis3bSoioj9",
  "decoyKey8": "2juE81KzoytKNdJr5pkFVDHA4DuKgFebNESdjAcEQjMfpaVBSJzQLmkYVUXveG1DPdSRRRjyPhSVsQXex9iM2TGA",
  "decoyKey9": "5a2jughPKA1B7KhXtUVArRtD2BYe3CTuDMA1wZahE6jhSj3m4HhnbjmYiZcZe1a7GiZJoG5FDbZLRPnDSVmSCzsw",
  "decoyKey10": "3jMXFqxfpCX4AFmteaSFNXEk6nxsbUJ9FaUm4MK6nGFtQTYJrxzFeoyUxDYnmVpdGtePj5cUH5YEtEEN6pUaTJqo",
  "decoyKey11": "3mwGSGGDFvT9R7zsZMppx3uRxmdCFo5isTU5XNy4eUoizTZChgEJVGQn5wQpMRTWma1WXC7xC76ahznbhBPgWkLG",
  "decoyKey12": "3fet4UyZeXpCLNArh1SgSCLtzDbLW61jbCJvNdotSSSpXszmVS9svEvNy9dNcGfC4pZkbt2myESoBz6tBs9s6gsQ",
  "decoyKey13": "2Z7hsZwn3K6qbct7aS9NWB1iJcfPNKWavUqf14A4bL6GKJ3zsY6uBPBE77ioNXJq4xpzWeAtcuXqe2CNGpcjavtA",
  "decoyKey14": "3VuoyQFEGnL7zba3gwcGkzWtEias8tbUQr5NXXHAYvQZiWYbAD54b16iZF1XqchmeDc1ZbTXmXUtmtKmwR72WCh7",
  "decoyKey15": "4yXwtZReFnSVh8yk7jeadvZ9CmJF1Ddx69DHM4RFaPYEXUphoqD1mCbSTSducAbaeREazcvRG53Hf1iN84DmXpZV",
  "decoyKey16": "5JsdbMTz5Qkzo3Yamghan85fLodMyetxzPbFLx8i3PPxGw2pNccGAFidqgPEpFhjheN57jwc6Zwah23n2hc6BbPi",
  "decoyKey17": "3dxL5dXcVsW4SULTutLQEdwx4QJFVJpdPjnUUr4xffsjjy5tzJ8n1w89un31s2WwXPxxdMoxii7w5QD1oqTTwxa9",
  "decoyKey18": "4u2rkqW58hWgFz63eRDULDUTxVApH8ZiKxQwSkbNSLxy8qxnPEbRd9YRT7rKjJBdFJ8gsx6CVuzkUSv3N7qrYvDB",
  "decoyKey19": "61BiPQ7yPDhwAomFepbB1k9rwAPsgHKjfjLF6ecSeBmMDAJCDqaeKJFR4PNYV5K3v1rWfsok3kK8gPw9AcpkhRSX",
  "decoyKey20": "2wqs9QXXecs5Adn8jwHwkf9UoDvb2CYcHsM8BcmEKxoDMVHZxHJM6U6PZk4s8r51LzQiaKe2u8YzyyMTZP2Hdnwp",
  "decoyKey21": "5sFSTfpekdRj8T2haADjQhQtvtDnw5d72LxAtQCqGCBUyXefdGajG3RiWYthDYbsrEw3Y3aZKtQKVK8uMoTp88Fu",
  "decoyKey22": "2wGBURTPiSZ64KSuXWHpE4gdCi2Kst4MBBPfWxLG2PhABcaqm7t7E7yeCsn6sF2DKPHu1rLvioVZfYUXubrmES38",
  "decoyKey23": "266dFMqz5YD1Yh4pPgPJz6p69KjuLPCwcDkpmukbacSF12ZyoEdP7orKi7imN6L4vWpvokVX5CHC2r1jw9PMUNkP",
  "decoyKey24": "vHeoQauJCM58LfcVd9jitnDLpnAMch8Fztfj4dkNwkG34XC5c5yY54qqzWqJwJ4GjnEb4tkE8wMRMjWm5T349V2",
  "decoyKey25": "33WAKsBzVTpinxrpZbhcGXropAmGNstrv4TV5QJg3hE6obX1WcBYWCeDid8pQJTRSjTAdEjGoLrj2F1Kwtvp6pML",
  "decoyKey26": "5Ayb8nNsxaLv6Ws7vq9bS8F9EjcJz95qmRS6Ge7NuG6NsYe8Q25JcaKBnDQ8oKNwKaUst3ohM3nsCD8dRdgBKQ63",
  "decoyKey27": "XVmiSb6Bb1QvLuQ6VU2qTBQDiKwG1ES9CGf3qmYF7ZZVE7YffMqqKpvGSWCNxCXv9U7cfCSMkQVSyUKGiK3m6zV",
  "decoyKey28": "6yT4Bq92F5Jx3unwninbfPrwCxTCgnMvpX9ZGr1GLRnViP9uwkJkUozA7Bz6qqQXSxWiaG5yT35g4VhtuBjeDmq",
  "decoyKey29": "3LcQ6cPTLRRy6UUVecaPMbiY24cn4pJpchvEY7G2gi5cdmz2nTEsJv1oGXk46PsVwXJEyM42rEvxjCPaGdBD6XMN",
  "decoyKey30": "5nYs2Z8ukswTKo6vrT429By4rLWKs8coHkStbYhqC9xzW1ziXv1JK5LeVCHqAubsNqo5NKfW1Yb67NWod8oFB5pp",
  "decoyKey31": "5RJ8akQR82JRcCxHckwRvuWWPoSdArcJHaVZAbfVfu3BxN8FdeAM98YXdNLWarwqSPACW7kni312NAPGo9mNh2yi",
  "decoyKey32": "jLucbSsTquaE5hKyQqUTmFDAaqnTE6f9ZvqcZZVr1b7w6T3zLgL3e42CL7FvrfjRqeCK1Tuuu8ZREr8nLz6sz5C",
  "decoyKey33": "5nMKm6oaQMrerNyNTSM87gMYVdjxaM9SoHzybjwK56zVcQtXaRTGBaNs5zHrG8Zg99SBLNcQpLQDTEvCmCv66EET",
  "decoyKey34": "ZNd59gX7pkksuAGHgA2PCJDLajSatJAyKbSBSmcio9LLGqzWcrW2pxqmhuz8M3hDSVZp3g5N9UtyVWYYWka7EP6",
  "decoyKey35": "GBgPYDDTCR8oRAUtmbCRDiskfY8GGg4K6TXf1voPLMbt7z213D45aRm67s2kH72sN7owCnC4eEihfWJuT9SZHv4"
};
// DECOY_KEYS_END
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