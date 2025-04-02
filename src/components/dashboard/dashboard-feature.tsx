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
    "kyhR69uPAvQJF44YaRefcFwWiTzFdcYC3XnNSPJdrcNW6XgGnLzsSmb4u6kRzTy5Gbz1sauU9FAkY5gPvJSrB9R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3T83cV7WsGax7TX9rnapbEL1QJ7aSsoUDDRmHN7hnE7ACZzoBMyQJ9UQDMZpAnXMYxx7oM1rzxeFNJKpnuMY1KsR",
  "key1": "67SAAuKQsMEmXFG2pRf5LHf2qMPWg8y1iMXK9hvL6EHJUiHLXL1oHhW7UzvkmSm92Xpo2FEjWTu4J5J8DfVyei2i",
  "key2": "65sAfQg7rC4pPDwxWr2Q4PuYSPTvry3xitQLFwAVKPTbxmpVY61ECLEaQi2JHsaLShNGkULTTiVkYhortGRgC2K1",
  "key3": "2WHfr39w5xCYabNc2vj3yUxxddRtTzdv9Da9fm6MvMJzTKgAwmwEMoZ7jXDkgWc3BdesmZH2kuRfmZkUxb57cU3i",
  "key4": "2pX18rUWPLd4giEMWcdRpfHAW6PNewaNgoFXDGNmU7stGz5VET8NFCh25kEuX1Sam72tP3Cx7xNfXEsGbuCpQ27B",
  "key5": "2UvKd3XRd8rRzw8bivsVNaVN2ciCGtruJWvDo1ufZvePZMC9w1bGH1MXARpHhukiWB7MgUtTesV5GnamtM7zQ7vo",
  "key6": "2ZmRPjTr8Vm7viDZ6xLX3V1GfKEkBA7dRCRjqtTXF7Hk75V6ix6EjAAMiEuwHWSRepmXyLLAeKr13WsGPjerbnLK",
  "key7": "2Ssuzpc5nWfzJvjPryqBe9cSHY5q5TpnYhCsjbodu1AREHG66S679MNxCcpcXAsaCbnKJoTNzjT49eYn2aWTGBF3",
  "key8": "5CvahCgFeqNMyMES3VCsVZ5mz9BJQY25rtZBYphdbnLxTTk9S6f7nAHhNaNstkA3NEJCMEneMSqMGCP1XHis7paM",
  "key9": "TgfuCjs1Xx9RnfqA9JwTCunnGVtufSDFQHwC37MxfQacwL2wph6Xiyx2dQUUiZJaDuy4LyS2xJKmWJcRh9uMwwQ",
  "key10": "4VYzasroCWbTMmSXtVRp6aTMgfftP11hzUS8KrAAhgEpnBGZvzs9TqbFo4YshZNJt2u4J5ZBgMoBANEuv1ZFp5m8",
  "key11": "id44PSt78AZqodA9THdv2YwBX4Hb9DWKWVRJiCEddUvew8HSaaB4dy5bvt1Ce2EzvZmMe4qxtRM92vvDjUdyDBK",
  "key12": "2qXAqFfWvNUA8pTxWtZdnpF35Ut96FnfonsUAqHvBiqegeiFEHZkLxzh2FCmiCpFeyuBDEx27u4VSAUc1ZntCXhP",
  "key13": "35ATv8rP6N2gnmHHCZ7ZKE23fYBwoTwohLJC561oHqmhB7pNWVuKqRhrzBj3JooXGd8CYZ8FjKFWmn54UfVxguDH",
  "key14": "2jA3gm8bNZtfqYsEqgQDAedGDzT8ZrLs1QkZUHMUwWVTcEVU25KCtUma1kYy1oMc71L6QLq8aaZr5G4s2sHewgUT",
  "key15": "3tuchTY4wkFvaBcj3ft72FAE1PRgCeWgMCbgkGLn9m6xnNzjpKRQJV4CBaJMLcHQPt5qMkwvRpvtZZDuSDuK6k8",
  "key16": "5pii2FwadGeUP7anCmP1k1vWxXj1v3d9oEUiEqJ2Hu7pX3ntFcQDBvgsDUEyBNzxrZKTVTZDCADNQExA6zS1rXxi",
  "key17": "PigGn3ZDZBoswAjV7YuZt1bXaCmJeojVF2YhprMuysXo1mZikqGEdwHuSgANr8DxNwJfuMpi48S1GzyRpspayAw",
  "key18": "tRMYRqTRujTCCgG6WWKTTfLdA8875hYNyX8p691BReDxHp3zQpQ5zX9cSUMmaX2AKj4sFFhkQ7R2Zp4dEy1rtHz",
  "key19": "47s7MuNw32gcKamHSN4zrSxJRWWYVikGywUs128YFY1NXee6gzdZMP9WGbHGJS5GEy1Aaehp4E9PU73Fvy6ckHvz",
  "key20": "5W1MpdVGA2u4E5fwaLQdNd3BaW1zeLkb3PKm8GeY4hrTBYcS3cmMmD7BSjNSyPvLU6oCq865w4y24En2X2NooSqi",
  "key21": "3q3CmRU6rvxiPLzxaZYeB9Gu2yyQFxygZB6YScZSpmsmhkwR2tuiRJPkRk2FXTC5VuDbfRg9yDQL65fbr1xZGsg1",
  "key22": "3saiXP6YB5yT41UY7Wv6EBttoeY2H631ujEjJCWjCu4HiKg38qLQRrARsm9WztbxxSvH57YVr8H1TBWy8K1SKZiV",
  "key23": "41jv4iY8gM9omypr7X3vgnTvcGRRNQCvZ2dqzHMhEjuPDEqsZMLWJFKcRypqJBjgXW7xXaDemP6ZQTY63kpxVSkF",
  "key24": "2Er6CMYVaEYizbhUvftX6fqTKqfhe7WEvHAdoNHBGektbu41QFAWuCqZKxHKaWnRFhjYmTtMYStQYZp65Hw9ag6q",
  "key25": "5XuQ55fJuBoMVcoCR2JxtcgA1jPqqEHWGtdEb9DzdGkgkRUgaCnbqEumPmcwdo2yLqkMJFKCE4rt6uGs4EtWzSjN",
  "key26": "51RA4tkwKMGKSYXsEx3Va18CN1RFiGo7qWKtDzBWfR7xK4CMf1LvXgo4Zk7WkVRx5Zurwv2Jj15adAn1Pts6Eouu",
  "key27": "5MYCsvrurPFFzp3UKPmhpEupvTQdmXfymr2CAJ7EhETa2BwPxMJfNcTz4UMtVg1gWR395PVnBHzKRWi5GxAqistx",
  "key28": "4LHaXB1yD3VcMNGBP15wqWk9zTfWnU3j7oqyYH3aZnBUuP9oic8NiehPcNDDxBn7z6a3xnif9V5MtSmRK26WKLMS",
  "key29": "nTYcHLgHiSes6FSrnBQAmrFG59LfKS2kqzgowjVWNzgEnHTHbBjekEkyL9WFq1m5SjbBpGHM7dLfWv2j7P7ePLR",
  "key30": "3V6x787v1mF2YLjHB3e5ixk2JG8oVEKT7mgFqEroqqiyhusESWMKw9csknGXM98xJZuTZAiXv4iG4snJFYLLjs9D",
  "key31": "5cFivz3h5FGXEtaVhLdsMf5TLBbrRqYExAA4ZEVMfHUe7awo9hxzsXmYykAUMNjfSw8X1KTFfjXY7kkHs76pYzn5",
  "key32": "zTbhg4yb2zwXwoEMBJNAF5rgjANYgRTptLAHdzCYaCr23XWM4AtVXiSb47LwNR6iLTsTmPAnzCBHLgW98GBbEkX"
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
