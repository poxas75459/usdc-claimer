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
    "2v52xNdvD8e4NZohHcDrgWSikDdX9yyGk2fa1DSPA9PAUhe6xwTennztLjddHy8WQxsnTeM4YNDh7V47MDarfEYH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QtGNJyyg8ksADGe46KETyrsQQrSBJerr58r5ggHjzuMFezNz1BYLYD32tmTFS65XhRn9FveoubdRasqh673xUpw",
  "key1": "5MGcgkARKEH1wye65hwudroEaPkPxvzCzQeFjCP9HikW74Wkc7ZE8nLUiuDULhpfR5jZ1st3WD5hMfhR3Pgb5BfZ",
  "key2": "YRSU9qVwVCJ9wpDTBmmbaJmKuQNXQfBHE4w2sRws7AFiDFftkCowGW8KZBYPoy6VrxHkGuYPL89rJSjyZk9UqHn",
  "key3": "4FYziCvt638rqys6dTsbepMq7EZvrx6HDPpYaE1gLVUG6qQsjQqxs3PU27Qqhf8d3FSZ3tuQoife4KoWUSpg5RGe",
  "key4": "4Dzny3iWGtHZa3dpP88ZbK1nVWKpoq33TaHLcotsymGcmRJAuXzVKdGDeyuvQ7tCTxaHZCymqZLvKCDxK2eQR8rU",
  "key5": "4m181qoFCrr46CSQT3sJtT2id7zJ7NLf97Rke1msv8vqbKWBUzStc1XAAFZ7BvdV5xyLKHxM9DXRtg67LBkGbSpz",
  "key6": "4Qwrfmvgjs5sphUQeg34eMU8UQYNEnRZZqWPVEZHMziaaCm6j91sCYyiRMpJqtwAU2Rivi1J754QrJeT4XZ3mWSQ",
  "key7": "3qRfCq9fL7DYFtZFyKBcgr8tyK2Q6yWyk5TombXxkzv7ip3oSSxDyNVKw719d11Z45DwP3wbDzStjg56QkTu33CM",
  "key8": "4fu5TMSZAN5FFScVBpqmy3kWykeG4ezdByQSrpyEoZB1oJNP8F55FhS5GmAyqB7daKbfqXLrwQueDxCVz3TQSWDo",
  "key9": "2rJaFJn313MpwPcyYWBtfzNwvGhawisfs2DzAtoWNgw4HEY9T9W44Xah1ZzeGzTHKQ3wS81NawD1k7rEXEMEFA3F",
  "key10": "3aTLvacHGWxKQCMCSedVfzy51gwKynkSZwRbjJ9ewxo4yS3j2X7z57cRxXycfTpBWxq1vUcKy7Zy4LkNfMQHZB28",
  "key11": "qNhr1YufpiBDt7AjCM5QNKfcrbG5r74eTXcYMtPgr6ofryqexF2rqaY1QkaZioF3QJ3XN6evCDrUbP5fhfLNPWF",
  "key12": "586VAXJaDfkg6Sqx5BvpR5ZnkMppswx6NstwLvqS9XW1ceoZgM4rb8SpxZKEpripcdbKGTT4K4Zze7w5jRg4qePZ",
  "key13": "4L4gZXjAhiihb4XyJytba4k8NVpWDM5NcnCGyxK25e3WsogcDHGdsye1HfVeR3kmGau8uBcUPvwUxmaZUuYzBJCn",
  "key14": "22eYnHaWwzSeqFkBqKMzf7DXnvGXNsKwYx8ecgkYV88KQecgG2RtgpXRgqNMfSn5CM8vpGVxW2eSmNTz8Bsw74q2",
  "key15": "5G33miLc7YNeXr14X4ouh6unYg9ob2o8pGnfqe8t9zKPMJS8amtPp5pH4g5M1knU7LqYJMfiuL2aiTz9iZpMqqMn",
  "key16": "2smVpMCahVh91nh21Ctwn7AsLiD24UGzVn9UjGKmpM2eyrkY6fqcTQUmvxMMRD7nbUi57hSPW1ogP9z3Pf7roxqd",
  "key17": "2VzL5DGheRogGD9Uq2yAstoGYAWfrAYwmPYYdYBWiLsVyMh9MyAncUrxga1sEfYuLijiw84k2Y8hUbxcpkRkpmgz",
  "key18": "3n3diR2YrXwT2SC7XrQnRa4PfFCsdwUpdnuFiX4EZXEif5PgpAKpADfmjCzVdRsEyChjPg2g3nvH76tq4JMNERyr",
  "key19": "5aP1VqJWjw6ScrsDH7z244GeGmupmdndMetCnXDZqtQWj4FLvwrhqfChWTWmXvqSBbkrZaZUtnjNNuus3gkXc85c",
  "key20": "3fihTXF5jKsiF4eLe8vYSs4m5KGpqEegDZJmGKQbb7Yrmjqt1T8rHp6xzMmD4fuhMa5pofyV6Luq1YyBuDiK929j",
  "key21": "6EgKRx3HAn2gkbFRH4Uz9wS2J2xCCq4nGWMPTCAVpHunBhAeB6rrmGEGvVWagaM2NVXBBTMbKhhgaGdKrkiHpj6",
  "key22": "btsTNF15B5DjiFaipUdcWSTcJFFvuCeZXYRniQUq9MbDJAGnc3VVMF9FkBFsP7QZWW3hZ4GPsJBAJGa5x7umLGS",
  "key23": "5xJpwrWBsjJT4WU7nDh898JKkPcU88zDb2mubg9Cuq3GLqLBhcWcC9gyu2Qs7C6FRYNL8kU1tDzdC2PD72xW5Lsq",
  "key24": "5BaAF8GDV51C6R84A35CWJaWHYAzSNRKFn5KdyHsiF5d2G8BHCLRPFyjymC31V6Z4uGVe2vuSWNR3e6TRWH8dm5Q",
  "key25": "623SKweGjTm9Now4sFSeFsk9vZ4pKoXKr474Ae7pxTV3PpwDcV9SoDLjNdCNKdW86sibZrPQbCq2Aau7RJrcSLwy",
  "key26": "32ro5dnLQtrCpj6nJvSECtN2zkhFSsBqsZhcoqYB63XaKE2Zcas58WSbC6hZnvaakutUCCBBVTSZUDihCJsZijBo",
  "key27": "4nJQuXEDTvymDWdmL3aZPeCgXB5r4UcV6VbFozLHNSPFwDnPB7fwHuteH4uVJTFEyVGg1fVMDPVQjn5gX13U5eMr",
  "key28": "67Rxx7Y8dLKzGQCooVA9EFELSVixLrs5xvxzXMvBbmxgR5TE8waks1a47AvixZE18Ngscy9F6SGuE5kPVdkJHWE2",
  "key29": "4X4Uwv1ga3dWgAZdC5uBpci9PwGbwWCi4CNXVzSx7CyTUC5x244xVM5hnkUmjqT1BKqnoFwwwxuucoQmPdGcG8pb",
  "key30": "2VitH3da73MGGF4pabYYdM7TWmi7f9B2dX2oVdci3zLBomiYLD5S6tJeEBwHP7p7wtpkCApncrtPogaHmLSijxsA",
  "key31": "2AH9nAZ21cUNZHCPzvh3ys4VdzKYQSZCYs2G1fWtb5j2Ro28AFHr4vRyv8M3U4MW9x4qf4NVFCninA2xXNx9SX7V",
  "key32": "53U6g4Xj5EXkh7fwEk2EvKavin4FDbkDTBq4cKw1FLHq1VxWXvyA1xfT1bLkbqk7UPbgjWDZ6UbzjiDQ5apu5i9z",
  "key33": "3oUcDerXXyvZSCv82emuP3wdv96HxvCdP4epMoAhBB8RPwCSn3f8a23zh6SHtxgz5s4R7eiFzY6p2TvMSo2WQA8k",
  "key34": "2AvW7w9i8MmVD6cMPjL5Qp4WvakS7LayKsv5PZdiJv5FrAn1AFqL9MghZyfHQthPWa1oM4M429UpSb4Q9FF5uUYz",
  "key35": "3LtVtWX2W2QkjNovhkM5CTWWbCkkaZpbBsZDaG7VTtBD3KCao5sF7qjVtPyw49UsGCLKuuvmPMFccSJHbBZBQHk3",
  "key36": "2CL4r8bJN5cAYdGUmHhqcLQz53u1woP9Vb451CVNZxQ2wYGdY76D6LxNo6GvLa5U7a2oggKVrMZpEtugNSdnNBrK",
  "key37": "3HRsd4VeReyy3nTGjqNFytPyDbsPVCEPNg93HLELNMq7L6728d5CVtGTGB1GKH94sbvWDydgftSbUZPafhWebQym",
  "key38": "4WRw2g7QgGkKUn5EtjRPYY7PxouTgiYKXBWtG8nPfvYbRETN3xvArTQ1unK7FHM3f9ZtWqiLL5jWdLRYvAzUWM1h",
  "key39": "5FgrN7VVCeamA4Ck2vRAk59bMSBXBxS8RKn6QUZcWfrqzb61atoz1SWFBv2Hq2BP6CJz5QUwxUi1EUBCjcU1qGbZ",
  "key40": "fgajpaMsNhnyegssXbLBrdmrT8UWntRzQd45kKALSXuf3QWTAuVohGzjPzYFUN1UiXhG2ezdxNjBDkJFM9Z2sET",
  "key41": "T4fYCFNad54HEFJuce1NNEHyjCMTeYX2oA9ThY9thWdu6CFU2DjUeaUJwLyny4FzdtucQ62MbnntvcLSWZ7U5M6",
  "key42": "2ytCYNshBZ37hiVJ776B5BvjDaQaHJVErczMypfPbWA1N9MuFe2hnwHyBZr1AMuCoB3LBfBTSi3iVM5VFNokvDPw",
  "key43": "1ArhtRw7Y9mbCZDcgPaRogdzpJi1jqZPCD5ScuiffbjT2KVusLuXY3mEXTaVSRFcL9BG2cg5hcciURmCpPcpWNP",
  "key44": "sLEoL97mrKGL74XUjNpfA6sPMhj9Uip8KVogfEbogSGmdHUrfgBg558goprvELFhPRNMgb1XUwsk2FM776toQsP",
  "key45": "5pzVcPysEqEboNBoEz79uh551L3NPVrDukgPoqGivVh7URoxTiXoeKFHbBU51UuLr29UEjvKgUJB43qv3mZZmzqu",
  "key46": "42fkKLLVX8UG8HqVpdy943LtEqZcQH7LuzP9zqoVbtkLGE2PUEocaCyiG2ACTMvM5nestrYjFZDWMwDVw9HRQm3d",
  "key47": "RCHdDqukCDLsj1SHeMLbcva2WWprj5tu25krrkwgyEtdwSHQotHApbxhB422dYmYrc61uhVkB6kpj4CuaG9DQmJ"
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
