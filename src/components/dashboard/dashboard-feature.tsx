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
    "4ngqazAwV5EHX3v3631Hbo2F9yxEKEic4YutCR2maxzrcRCUJNHDX6BnXGzZmErT4xJXKHi934E8rf916iXdnh4d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vZpMQcEC4BTZ1Wa51hHommLDQdGWGdjvuaeNRRez6JFPfEhPg87qRBhz7dyqSToYBdbWU8bUcMww9d6qKXrVxf4",
  "key1": "2wwrJy6Y4B8dCPDZ7xGzakFwuEBZ58Rcke1b2pXECLbAYFqUE14y4M3oL8T5jA1K8Zd46htR6Se4XeiCuztApF4S",
  "key2": "5wjtnZ5VFm8W7qVJVEsLz6QRPYyzVJ5TQCKzgq5PEzYRpgiXXNLSh6Lo1PHbtsJ89Qa6cCyhinmVv81DWrj2CQM5",
  "key3": "oEVkcTRVmFjRuZmih8dNE6FnfinocwGx1tPLvzENdQNsD6JFEd3CpELRN6SDCvnZBd7yeRD88x6oTAnwc8E52RE",
  "key4": "2BbHXfybnrpDgaV7gv2aijJd7Qf2oMTfYRtBSm9yD3zzYFt4uym6TXYmMQbZt5yt8UJRvKgiavKJ3fv6enacCNfu",
  "key5": "3UWauoj2pCgpdz6sJy6TohWM5TxvvqeLRLXcENCAeZ5xFx2Cr2aRCmtcs9JrSvVBzQua624YWkSxvLNZke12PU1L",
  "key6": "91MZuYh6Vc6ayqydX4cLhUPbpajFsprFbAEvF6p7riXbAKnSSGfda2u5tL8GYD36D3QYjvn6uNLQpkMZtcSnaTU",
  "key7": "4ysiwTiaFfdjNEySHcaCnis46WQhwnckGQs8gfExsR47rmGDZKqEvUdz4ArJNmQd8bLFCBUCoJaKj3dgPGgNvWB",
  "key8": "ezGDMpmjcofKZicu4YgrgmiBE6yn4zHtoAADpLmDKPengHNUy8GE1EELCrwkQQgj4DueFS6jeuaLuZ3j2mAriti",
  "key9": "3P1dsSKC84esJ9RZDqPRy1kVynn8zNe4E3s136wexgr1GcqSZ1Uzro9zgmWUvgeDAyJt6vzKUUHErvZfMBCsi1oe",
  "key10": "3KjNmaF94jF5FBbF7ZVBm9pdM6VPz8aoEMAqhHfoat6aEV4amuXS884qJq8yqKrcwjc94BGom2Uce3iGh4VPgV1L",
  "key11": "2P7dVHpbvCz8HK8H98Ku8GRgYZFNmiu8Q9VR1erssNdjck5JhX7P14GwiJNTCPwmEptxiipZYB8ZdHkp9wnkh7at",
  "key12": "3UQNVxkiwXnX1fxc91LKGjQhoKujWBWQ2yw6Wi6jWhpURXBWZH1qDS3Mt65NfGkjgRyYXdn5pgBh8nrwaYUkue51",
  "key13": "2XaqG67ydxPnSQC1uY9MbPoCiX2xqiWbLk712JKWGtJ9CLqekHeFnu662Z5uRiLycxsYiQ2rZFJPMRYGXeM2gqdN",
  "key14": "2e3Zk6kauEz1gDW31vNTr2EX9V2MDJmM3e7vTPWtNZo6JECf2e81dCZ3nCAaTC2EHXJAqGeLBR1n7CHEkWFMcorW",
  "key15": "3Y3VJwZFTuhv7AqQgmYdMPJ8s6v7fWokgeKMKNLo413R8p2h7HZvsNMuN5Lnv17hELLqhAoDsfQHtPJeijcy2KVm",
  "key16": "5KEDacjfViG8cB3ggesmAqJVywWhU292vMpNif4XGBaTr1hcsPrq8k8mo9NUyb44JYvihXcPx3txKCLrc7rP3ba1",
  "key17": "27uHtLxuJUCaj5B2cdDx5YxVNBSpcJfCxcKEduTch9wdW9xrXqsNuvMYpmNjZgBMBdK5bU1n82xuv33NXAEsGzTN",
  "key18": "4z18zNpwpW7zZyckhec64a5rVmBN75BciTCjub12nY5TkRi3nVntHSDvrQbsXc6iKwH72GaKrgFgpqGgJwXpdEx",
  "key19": "odyx19uSBkFrkphfKCUbjQWWxvG1b8fmd2qSBPX3D3XhcXzj9Gf3cS5tEhP3PfjmfTtDx83hcHfyBFdhueWQxTL",
  "key20": "4RGZctdPi3b5KKvNgw9bgXwfiH4EUxhq4h7LjixV4RGyPYvrAY7oCmseAUWAY7HfZNKpG1HSPE4YJvDc4V4S8Xsj",
  "key21": "K1n2LxVWzvnApyBx1p3SMifmnWd8AA59mQY2HUtS5aJHKztREezRQ9tMtrvi7UU2fopLYatGQACtBmCUufWQ7Gs",
  "key22": "hFRzmvKEYdPUrVhkaifegBX2WZmgXV7M8cBbnmWxoT7Y3gZFcXT71YYxdpZebiP2GzqN33dNrufszob9JWBa2P3",
  "key23": "2Mih5Fk3K1dkUehEs5CvwBJTek7MzgKMgiP4GyPh6F6Mwe33rNiDd3HkvAVq8tUNRgh3vGwHPL2rhnM4idQHPzTc",
  "key24": "3ZX9xCs4t4d6wf8CEkqfsom9TnVqQXEfCU3rNyUG5s4sSUPkYWXe8z623M2WahsPoKMMJ6XZmYsVEZDETX9pVFuv",
  "key25": "578oic5qXtLyAA5ff8GfiT5yBUk1ZwLrWgos9KtJYmCde1oWqZH6RgvrfeBdPj1HS2zPfR1QQC6YwUqWk6VRNMY4",
  "key26": "4WTpvbjeoRPyc98cEJXaMwbxnAnF9PPqxRbaDmhELyoUwg4i9PBsx2F9AQYmCdhBFJUB5pdZ16Jk8VFuHYhg3EVg",
  "key27": "zRK8b9k9SZHRgBv4zPaa1jbEyvysVVejeXBZ14Mt94hjiiumAWDdiNa1T48o9pTsfzKKF6vnAmVMATHAUNrvWRM",
  "key28": "ezcwiSvLq96jro2pKo2C4UdpgbpTxBD78zKLxJg39m1Sbk4iFbEoJUoe73ppbWafQQvPbnZSSfaSewpgiAbUvy9",
  "key29": "2vztxmGEyiBmA3yeAyts5QYyCd1Ku9XQRQCZ9zzsxW3H6Sovp2ztTn9io5Uth3Ek77FgcL8HqAd8uZrMEkd1sxkt",
  "key30": "wcozoGrQs7zMY8W26SrDQtC1FjDJRWN3LNMGmdvZZ1HGamsX4Wo9RYZU3WcFbGoZX6trvhGsPbWVsMV9GXXZeZp",
  "key31": "PbiCDXAVJWc2JA3RpyPSMqiuhhMBRKSWHJ2Wh73r2KQ8rJoASAiGyf4MPf4YmWmDWWfXosAZ96xnRX7P4SymUMG",
  "key32": "3gHkhXu8eVybmaEM3Axy662qLwUWBhbjVuAjFFgLrDS4MpsTaKQf8QvcC85cyUgMr5HQbkGBKG75Xw7xfQMEPadk",
  "key33": "2K3tqasb9tUNAuj56uS5TABZ6iH5W1pegViAHK1ZdnXfCiRyaPt18GKFzSqpd8YiewfFgS2jsgPBqxBLoZWGodLU",
  "key34": "52PgfvqT2AvNPb5eieSsiB3wBQuFyzVnC2HSSZ4P8VWowjcAiHGkj7bMKD712Apu3concBLzdSfF8VMvuhVNrxk8"
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
