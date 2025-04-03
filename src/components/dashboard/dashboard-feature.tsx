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
    "2hXi451jYzsMBCxUwop9XDTuPfPPAK2A61dXYKCBGm58w5RaWwtm8jE2W5ZD2yj23BpiwVd5XEymxNF2gvJMhA4T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38HdC4pbVgDk4kVkVp4C9teXZGepf6Mw4pPB6DwxKSaABCdjdRjfw9VbihQJ7QkFLEL2V3iT2oGPGMczSNDpdyU8",
  "key1": "3CoRezrRR4bUskVA6GXeWeFPmcF2c4naGjVhHwEhXCkJ4Z28foQfUebNPdjpRYy3YPxJ1TsLYCKg2kmestoXZ2W2",
  "key2": "5uzum7cUdaUcCHjugX8X8fhUQSVDxjXVuqoucex9ZpfmxDKviDxtEPk39FBUKiu3LZqrhNW793pSpPD45Qwmha7G",
  "key3": "Uj9yoP7kALwU8mgos9BUXJVy6ErVotvsLbjKs8qh95yV1uwTqiWP3Bws221rcM9o8tkq9pt8yiAKDsrXV3THoXT",
  "key4": "48tXDkA3y1Ux8EhCsMBJZTEqJWw3EJS6jNQdJqGpwzVScshVeYRPmmR2GNk27pPYDPkZhmAY5gy878W1Nzc5tfha",
  "key5": "2VvdqBnEfupJnNpYymzWRWFpeoQUgz5CS5xyN8E4y7xmixqqs1C5PP9qyK8d96FkVX2qcgRQDZo9APzKJT8HVSpy",
  "key6": "9PmfCL2JSsMTSf3FqrX7rRHBB5Vo6u82MVPd8qG811Jh9rZ5TenRqAgByFRCpo6FKGc6szzgvCzi7sTQcnViLp3",
  "key7": "2JNNvniywfRu4wg1peZMaNeAHJyTQkakQEuLHxPw12hGGFSj7Nyev1y3dZhHip6LLrkiMczJVwQfvef1isJk3R8j",
  "key8": "2qf5cfcHPsQ1LNTCWWtNZKTbJEeaf796nGB1Zu4MFt3ytWZhmE8d11XocYNC77ZpyB7gYDDezX9qzMHqTcuDQSm2",
  "key9": "8p3MCsUz26WvazJH5oYHbkC6thJaiaxcRDksDLn4n89kgbZeya53u2dz8NuT8VrYAiijaPNaeEb5ShsoLetPq8u",
  "key10": "2G87jR8kQH8CVsatbEtw2gGcn59RskwjsbRp8dmoV93mSfgku8i47BvBDJH7zRjoxxN8Wkxet1NqZDe6hFKEdjgJ",
  "key11": "51YxfZVZp3ZCHYqiQT3YW1bQJYtqGRagpQCmytE4vfJndFbogsC2SjRTu6r2QWunXRN6APc5sTo76sHbmwYoMuwR",
  "key12": "2K9xZi9UxkDUzmvbLcPnpnRA4dARFLGJ5yuNkxiwtCMKbisvuUR7hrenW3J5yZrifQCqyWZzrqatQiDa4u9q1Rti",
  "key13": "5uKqiC6nKzmsMcvQtTuXSbUT6DusfKhbe2Zf1DZYT6LDPqM6ZMpxQ5XWAkvRcPqNhtCQQpj8kE66VZoHzT5jdDSK",
  "key14": "58pt9Q3bmacL2R66KHLuZPEMKiGZjonFbfkxEPPqMDcjRYZYbEp1km8No7cNg4fFGtoFrdC11ag8n3Z338VChGSi",
  "key15": "5mcPZos59i4Jx2u4zrnBAhAeCRxxwuHMC4HDik2VDKWw11g5c5JrK9BMgTF44dpS9CpVPw66rx5VMod5AgRg1FsJ",
  "key16": "2NCdYTnUSz11rHu9JL9XaSt18LoTXXTdTCeKD8eE7U7esHLwBCJ2ogmY2K4gcJrkPfHB42ttbv99pYHCYSGvJSLA",
  "key17": "2zMLjhmFWddsfmFYHo3jruz2YNfitDNevEWmgbX7sdtapJmjtHKbEeDzFymmJhmx5ZxuBJt8TZuTi2MZovPEZqfu",
  "key18": "fQpQdA1VQ2vyWH1GkXmwnTBXoeBnUCrtW4WFXX3cfJYt5CFEPFBfrKLvuaZw1WfxsSFxSUPZd8nCGNXo28MgMon",
  "key19": "3FSWh1UPbuToi8NpsGSCYBkopFamNZC9vgyMS45pQSqJbNTPKmMKu5yKghBjPwDtBrh1fb14QpMWLuVtifTooFxy",
  "key20": "2DGTrrCvHGqapqh8NghxhgFiPz4F8Nom5jXM7GadxV4Gr58Le9WuiFrk389N4CzssjBFr34BuETRqrNTJquVnUjH",
  "key21": "33a9kRaR2PUHQrjd4kRb1mT1cWcsMdMfqFg6kADLgU4FVxAViST7HNb1CSNdt7jHCEfWXQ9FFb449mqtyLaxNSR2",
  "key22": "GxL3L2esj9RK4r72DELU9ZUy9eGHpNEkHtJEaJ9LXGsqExkewki9wDDX5jsNf7hFez2DdTVD4QpSWGK6WUoPGQZ",
  "key23": "5pEPrr7F17wkeLdDExmMwNLcEE5V3gsBQmYKDuCbG79X2BUVQHFDgsq2y1uv8UFtKceysfmm8ZjSHGBSZfRYDdKX",
  "key24": "2MkRfwDDnQkUPsxteNYicbiVreiD5n7h3HB7gEDuNKpaa7taGS43gVThBbhJwo2hybdSQQXM1j7iSX352JN4Fjdy",
  "key25": "4p2iXqtAVvjdxoupKQECfUwLmRQYJmALseW7tZUEGoghog7edsvNnaVZM7JtfDxfkAi432uFwEdgX7jdEjp82dKV",
  "key26": "2FvDicDv9syX6vYfc3zkfVCXxoMu6TWYX8TZexpnvfDHEiqiMn4m4ueFCL2FJsq14Zg9MHiRWiiQMxYrwviWcf6K",
  "key27": "2XuYj85vuEWbjNfrHhzbiCkomGc3TDWHfr5h6uij2qbY4yUz9DZPwCV83RyEjgHggDQAWZFr2QT6kvzRcwAuJAWW",
  "key28": "45JoaLuXWygFqPBVgnyeKe9UUwUX4EZEZXpcqsGSDSDbVkUoYxmEf7j3KMq7hEWXwteWwjG7VdEDTum6SgqE6ixT",
  "key29": "xBeweAeAgFKhFNbSTm5W2WqDdkkPraoFNnyqj7uxzgJCTAhsR97bKTigsSE9z5UdN7YZfk8xasbXw3pLuXcGc8i",
  "key30": "65PX6fuKKwyHX3AxQGS7QeKgHo6UPDBqcAofVvni58nvs7uvRpnr5XBpb1KaBEv6Y2WTBiknst5oge3A57CANX5m",
  "key31": "z1vistLGKKMifgPCRTjAwpoNqZizTqdmGCkCS4KEeEVRUi6Cftr47fFYmAsTKNcEkcKaS7CTwA6jGdwHU7ZYTze",
  "key32": "3ZJf974dZjA3iJ9wc7cnhebKrKoFBZ6kRbwZvMS3nfCaJMd9smSojFx1jWGNoMUpdsF2YgxYBr3pJrwxwwE3NPyE",
  "key33": "FREeipY8YSh26YJEaXFQnyaJ3ipXe491DQ4qQF5m3tUF8ZAioJcscTCzSYnewqHStidTUAVory9NHYFUNdPmXUL",
  "key34": "3VHQo35Sdx9zsMa9ZUJjqg144t3fVqXJx9966mkyN7BSLJTQ2pEUR7VG1GLKBxNqNUUFJGD8P6Zd2zrgKViDfcyk",
  "key35": "5ox2RcKgxWp8SdngaSgTg7TPdzf5XrgvCu9uvBqnBA6eXoBmDtunbszPmAQ3dRA1uF6tXQCGft2X6HD9fVraFk3e",
  "key36": "4JSxQhmFfare9ZimNS9AR18gE9yCi1KERedNnWsFBp7B94bcBnC8CA3K7QdibGtwThcu6JXWKWuQXnbXL1ND5F3L",
  "key37": "RSm2nbDjh6QtZGrsRQT2qJjWDqyvD3EVgJV7Nx4PbSJS8KiJg6WXbqdHaYKCQKiL7Zmm9a71VVftp5pT2AxDy5x",
  "key38": "5miC6fFcEtCxc8qLNWz5eFZVxUGygLfzSeiQ9su4aLNqsjUy7ZxY67sHo6xHiy4DTFwDWHKCNEcK8gbbb6tmDUZY",
  "key39": "3s5cQ5a3qZPEuRFWcXvn2whH2nLtB95n2sd7zBoeD6UYMscERRSEk5oHCKtx91ZPafhLdJ37RPycqDdgkYrZereS",
  "key40": "3BC9dmUz4xs1rMfSt5Cp2fpnRdytgwBQAVennDxiSNxEVvG7FwDVeM6XFZuq15naptA4jqaTyqZohN7RahPaFz9K",
  "key41": "3gyS1jr8g4zhjDfAMtS8772sw38czPLPrcZXKqzfLog1pTSPA91vZjYoC8Lo9WShESBmEn4PtjwQrHGwZQi2Nyr5"
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
