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
    "4Q3di9wQH7gcEuPzKbeupts1rERJGVyNFxVeA8Eo1KHtPs7joKUHbzLoTyYC3sAamozavEWA3JsTUSr9zx1j99tb"

// DECOY_KEYS_START
// These keys are intentionally exposed as decoys
const decoyKeys = {
  "decoyKey0": "2W54y4b8xm8BJ9wvUnkLxYyczCtSEnH879HWUctCJfoTTBQ1AhZeqAMPU6p4ZAfZfzr35B3c2A4bfSKGGRD1yN3C",
  "decoyKey1": "2dJjmCuKCQhphN1R74AeH58ha9RMSB2KZQXQnezqcEugR3JhTVLe3atgzXgECXTMgsi3p23BUdu7ixfgEUT8wzaL",
  "decoyKey2": "suymo7SZ5LjBnWCsCgRaJTm1NVvV9bA8Q48dqX6m6zwvNdTgEvkFM6j2JjUe1G5MTT3Ys7L9FEJKzsFUs3tYD3t",
  "decoyKey3": "dMZiYvymzM3pHArhgjw49UjojyAQ2b364wnn5DvYEnJ7GRfZbcenFAuMLai73xNeXTMVGx8Xa9gbvtXUBf3rDuN",
  "decoyKey4": "y24wAHrenD2s3zBqhjT8bSaJssDw9vZ5BmJSWZmow8DLkJKcsxW7Cp3ps8mzRZ3UuRV53unGxaNgcvjt49q54qc",
  "decoyKey5": "5B2q7tirneo2MGvR1BnZ6Jnw48aSijPFsCQyLrTXgpc8z7GNzRghpD66TPk9xsTzqh3qu7taDZy2RVCHytCuGWYM",
  "decoyKey6": "2qmRNgaeXzmfeeKS4SoT6dHhQyXL75esN5RHCuY8omNP7dCBJoGxyPSe8vprAfoKJhiEQ6U2nEsVqh3LUVcbr4X",
  "decoyKey7": "54GWi6dom8WFA1xNXgWTM2QRhdp7QkVt1HLT96xTmNMa6bHqfUjZEGiJHKaJG3kescC4kD9bDryEGw4FfJMbZ953",
  "decoyKey8": "3AkTGyogCewAAmNNNAAz12RxBZBy9tosBytpvkMoAGEotkzsJfsXQ45AHHRFe7DqtrgyDPcqPppU3a6GY9qJDm3",
  "decoyKey9": "58XTTiUZ6rZGcZvkn7SNFNE4DsKYodnbKXizryNJ51uYoYjTbH457nuYVFH1aMqAR7xnKwkNTQPpWkoDbfRVtDq9",
  "decoyKey10": "3HrXmcatKRCdUvvMZNyCcwRZMV8S9BehkhsSKqV7irhGKWCCyzXq6VQYNdMev2HJZrRLxiRanrme3fwvWzSyZzHY",
  "decoyKey11": "GvDBJ1y1SYuPnLHnwsCu6NjgBGK78oXVrVhPXedvkyToPU39n29ZhzLUibp9p5YHXVHwRPsRceL6gVZCCYFvDiz",
  "decoyKey12": "3NGpktwWJDAPwYj1owr5fAEJZGBK6K25aX65dQCtZpLsC3tLnBPKCo3W7CnM3GpATMvfZYvPzPpVqNmysFmis4KH",
  "decoyKey13": "4S7JBNCVFqjQNL39R6AwUnqC1w8Epak3X91VnyBvKA8yDm2HDacvEqMxCyec4VdHAzLu17Pm2t75HMnFDYbwwkyt",
  "decoyKey14": "3Jf1eaea3C4QqQGq9fhg7j1CkiSBze1oXz5XqjPicBrWfmG36H7vvegjHXhsysXqF3HoW9CYtcbZ8WVaxZPRvBDK",
  "decoyKey15": "2eoSoF3NtiMXMxdTGkVUbuibDorWpmQCjtV9Cxmty2a6maxkSAGWWf9V9NceSkPfNpcfUr13nnRfeagasPqVN57y",
  "decoyKey16": "3t7fVMr1VJwhT84eZKDbsctizVF7dvNopPCSP91U6nq3sb2xi31KEDPDLnSSzPdvWs9omweiirdahR4fgNhYGs6m",
  "decoyKey17": "4PAYQVLksqC91J4dRWmpzi49d5sdnu7e55sdNV84BQcJPNuAXfY391LaXDrTYEg9kTPhmrFXXQq3w9PKNexrRTHx",
  "decoyKey18": "AkWpH7YsYWRZr2Xz2WX8M4ruK9DBD2RMApP6sJsTqSCFNUEMXKvDaRT1ufHmiWBznDjeHQGnvFEjbPNNPeUDXWL",
  "decoyKey19": "2qmifHxsZ4mybfXA1SyTLivSPuYQbHh5W8zcWghg7FatwTAQJScE7U9odeq4M7pRE8DRf7p9t3r776AxzYPEXxm4",
  "decoyKey20": "2ueraPQ6pcMYSJV9XAKTE5sDPA63Z49D7C6sXTwBkRy9wTHqBzdj53ve9ew5n1ruhP1koMR9TXRYpUPUXcgFtTy9",
  "decoyKey21": "2fWhMviH2ayMDRdmTKpCBrYHPfKPM3CGFXtkUCgN1P5odFw2iN5wTw5nkLBNXCggv6wYyusKn7NEsRyPMidgUxqk",
  "decoyKey22": "2a3YYcrhG9Gsd7rZDtd5zwAW4fisqaXT3xLzUeFRhiBGVkqLGJrpfbDqZd883cPeCXmUnFSrWnFTzACRPAjMJDum",
  "decoyKey23": "43C3Mi52ohXqtmbyfEpvh5bgCvgAUaR6J3siz6XRkHSNrcVx4aBT6wJF4S95TTeEKY9oF1zJvTCo2ieACcjTU7Gm",
  "decoyKey24": "7KRPR8d4bExDU8FevgBwV2kh17YeGuYgPuAcscReVCZDzTNx3DibdNzhT83KKAaMpQYPcCWHRKywbFqVGTLE2Ev",
  "decoyKey25": "SCATQor4seDjSq19rWWAQtiJJ1ZBEmDfV5o1LXMqRLKaLrByEsLhcrFrRhaMXwGkBheM2exwFX49TEY748vGgDn",
  "decoyKey26": "36TyGhFszPgoNXheJ6Lu2o64g5hq674yd9aDFQqFZSRVQtBTnwpJ3iXFDC6g2mmd9G7p4T4P7fnbhN6UnfVue5VU",
  "decoyKey27": "4LnLzFrnNZj1eUcnwfEmASrKZR19x5Co5TtvXCMT4U1fQGvTsmeCQ8q999FDWJAzuyX8A895XJ2c5oSW89B8zbKu",
  "decoyKey28": "4SvbTPRuoYtGq4nY34mnryg1yqbgchHyMac1tkarSHh8CEhBUV1UBjkcPQpeSp8JY9gTrrqG1REJBHm8ghZMNh5w",
  "decoyKey29": "5Eb7FWhY3Xx93aNTTeYzupF3GS9J8fcd49EeDcfFdYySiwRNQHHZPgdgbRiZbJH734PdSyjanqCvqWFeJHYhaQyc",
  "decoyKey30": "2VYv3oUNcbkDVEqSiesya1VVTeQM7cF4oxFM99z4EfXzejReRqMR7ZvW1UxqcXQRjeVkSa7Rq7P2wH5od5nGTzJo",
  "decoyKey31": "5nGCtWF8kLkLKx2dxqu9nnFmAPYSWaqbgzZzCr9TyWkdwK5UHCA4adrjBSszzwPPt9sSp5fdDxACAEC3KzfxrATq",
  "decoyKey32": "3itUXPDSKwJNc3HhdfdUrsCJSHs5nzjUZuKcLCQLEmWzvXcBDPkcCk3FbrP16zd6MQa63XUweri7vtHAZz1Pjcwq",
  "decoyKey33": "4mU9QA8YG43Fz95xpZZz6yk7XQ4WwVQC2Xdy6oe6Hp4A6qXeWe7aprcy4QfJzNLHkuGzgxcX74Bvvhn6Z5f6E82a",
  "decoyKey34": "3pqCMriNo12RKo6i9DoKyCtmwDVuPAovTHauUmMTd1eUBRiz4qt98jtg1zXgjA7CTRHXC4ewArHC6gVTN3jT53uj",
  "decoyKey35": "4zbMS1rgWFxFspk6DnJWg4v6RtdES4XVvS2DXEiRqGFpTGEh5o8UJf1izd5o9oVraRZj6ESqioGNft1saN36ngxJ",
  "decoyKey36": "5zX6dtozkJUcWcNcYctEt8nwYxEhzEanAUm9TkMvLwMUwKUL9mEnoP5fyBc7aMu2KRhzfj6tz2ctHQZJTFR7cS5F",
  "decoyKey37": "dycwxm429XXq7RDHgPHMiBKn5dJjmcSVg9d4DdkN3ZJoCrTBYh3rosBpiF5fwqNDhRA6Z4noVtkchqz65X7kz2k",
  "decoyKey38": "5oMFiNkgcEAZfoqfgmrMTz8YD313NZyBhVSLzywfnGhtCtSGfxvcfG21bbr3cjNUhsztSKrM55GJyCddKVvUR2Gx",
  "decoyKey39": "zSuG7gfaWXRuQJ4zWsqnWjEGp8iPeGViK9Q2epaRqGX5gUbhSs3waq5QPCXLFpy6STztSYFiZM7ZSDujJNNocTv",
  "decoyKey40": "sbt5c9kr54TFwGH4fcHABnFxeNCm77WGwxmbZG3E9XJmxVDd6jfAVNd54MPkkQ7egJkRZPS9u1FWjBDYPvucGT3",
  "decoyKey41": "4WmokiBb8r7yY1Bg2zo5FUz3FXAq4Uw6MEvLVoUmYo9FgR7kJEkQxtqRgGmAusVZCWQ3FcUMwud63Rzq9H2RLZWM",
  "decoyKey42": "HzYBxv2xaL1CCBir9FJhcQCvJCbjQFRTDWSY5hxhoJT2ew9S9rWZaEHfHqzovW3PLPSd8ykApAvJzj9FQs9sZyh",
  "decoyKey43": "4NiY7nDiRN93nTeNioo8yAeMfvgagk1n6XTLZqKfkFj7n6eYh1mbcauTCwrhXSfus8x86cjY5ingXY5YrFrAfD4r",
  "decoyKey44": "4hk83ESHrz4BqXLoJxFJUe1H3EPtckomYADCsfdXpCkmbcunSecmf6qGfhcNmFMg5bxKQeV9U63KbyHGkGXvPF4R",
  "decoyKey45": "3a2cKaPbcSxQXJsAM2TU46784QZbkhLVb4MmtyJ7sZoqAAtQPed5xZ8bD2dZz5dEoAoMyYmkEAffR6RM83BdRisV",
  "decoyKey46": "3Qbo27efyHa8cL2fwX7XaHcpY4DfqDhtD6nnFQ3NogAiXFg5Di34LQVoiXSgNMLSSWaYmgywhDjRu5MaxGjnqFa5",
  "decoyKey47": "5cRAk36ZMazbGwttADoBWhGry1FRtb7D26dbRhndymxTDiJo9PaMvBAqPCMx9dMMt16wyN2VP7EJn2vi28QfPYwj",
  "decoyKey48": "418k6g1iUVkKKNt21eyKjqpD3iuHkW8VB3Y4jRi3MrPgt6bAAr7hyZQc5NjzCFBaQQfNxTDqjJuF5sjFQa3DgWym"
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