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
    "3PVVQFDLQUSLQVihtvL8AasEhH5h57WmL3A9UB2aVDSZc7ugUx8EFGCXF7qDjY7veVyvJwygyX3SN5bEnNZZzp51"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wx6pr3UpyvDDR4qCU9XV537UmdWPSdJ5TZRU4K6Z3Zb3NTbo2UkUfyrREMJsoSHRFLpSZWM1DJ5VPjmRd2qEzkK",
  "key1": "JqbdDqdQNfydH52pS86nXCsSNbbRuWSzDCF5BEGF3uKSAUSpq68chn5Mv5ghpo9K8zDKUhmTqSyBWm95hRtHTzF",
  "key2": "56VLftcedYVPnrvx3PUWSTuh7Rojf4cCUv4WF7EudiikbXxiQbbirLzira4rpxoJ2G8vXoQEMQMvax7QoMS3Bs1k",
  "key3": "3kw6NViLA8aJfYKH7yU4DA3LYj5BwVZcQ2mBFdmJJHu6PbULVnanmxRbk5xQs4HNC8EGq21SjsKXyUWg9ErPKfhL",
  "key4": "3e7bgw9kku28FPzBPD3UD4eAjYtdPjytWXhi3XXKt5mHssuoWs7MrsS83z6r9PUi5Y7kjyaPrFpDoh9jVhRsNbWk",
  "key5": "31vAvp1kURLq2SrPageJpnJJXSgUegfVcHGyWznvG5XtMScFNRFSGcv4jeQWi6ozHY9hCzk2BW4k71VYVx9d6Ukw",
  "key6": "3pbaCFYWtXirXT2yQiMyiJY6tMb3gZjSAgjoDd7564NAWmudhaY9iCfGoMoSTT6WpUXuqKD8BFUFhYtXbU1jLz2y",
  "key7": "2bnBiUxr2gyanP1SRPvkZryzcD5BijVW6REmkMqNH8VTpuUMdQ6qDMXYYuqnmk3ojH4AddzZN872ZwXdvdkFxB2J",
  "key8": "5b64fs1ZbvwHpzwdcx1enad1E6ApxCCwtFLKdiDRgiKaC7p3Nyz46RpC1Db95eV28iNousnYWxmoEcdpnr3BtdZA",
  "key9": "5whsDQEo4J4JqYvwwpi2WKMG6iHJxexP3RXDABe3a28hXMXUnTSWXmapmpTK3KngE5Hr4YkrY87kWNUsrEi4EZCm",
  "key10": "5umW3Wo5NdbAqYiGAsnYSnsgpz24rFNH4GRNNpDA9tA9vCLsAoRD21WqXBbM1FA41aaJH493hoqQBT8pHm1EMBua",
  "key11": "224HTy8zdKAw4V5w1UaRSthYq7M3MxY1HMA2E4xXCgpyDXwCtQyT44GD89QjY4Awd6Sg27LeuEe25rv14DYG2pef",
  "key12": "5kegXhMUMkvSdASNjb48ZiThVqZjo5dichFaGMcjteux9hpCJ2hS7opbkGHKhLWhKDpw7NfG3vaReB7rXNE2HWYU",
  "key13": "44qazaDUpuUkwCLoVBBq4uU7Hi8VWUNZMuQ29PaiiA443nGpeiWHCogzzmj49bVL5vwxjD8fetuvse6fq3n3S64c",
  "key14": "ET2rwvd128jgf4dBmDWP4SC6LwC1xjeHgGyvaVePX2fco3FT19rAVcgRMZqJPX9vNMESpBEEs5S6eBXQDju3eQy",
  "key15": "4J2A66SaeVTu5kKn14PAR3Cm3HKtuLvkxSickMwr8MSyK6HnBvxQpakV6fksz22ZTBsgmZnSbMZu4Gb7CHffxHLU",
  "key16": "3FdoZrA4xYGc96kG5hAAuzpmsdaSVYo7JEbnhANaBMXm6x59kZYE3TYUPBMyxKtZNutjQ6u8dfkHH3LEfE5XtehP",
  "key17": "UKCRz8X5uPjL8tXsCgEPKNHMf72EZcy9zMDbuGJ1272hpNHLdbW4wSuG7b43AKgnwL4qjqccDQNuVXFnkqii7af",
  "key18": "2gbKVRWFdsGZjsYtVsVbLvw1Fos1o46p4aZTNXnK2qf7Mb8ZGAkBCnGrjsRrmzEsMGtiFAs7miTSDnvjtinBA26v",
  "key19": "5B9S4CwqkLVVMTcCm34z1Vy9eiNWoMm257Ec9FLYyuQWk8wbrU8nXWNbJ1QibWx6Uk5129NWxoR3eXmeDouv2iCZ",
  "key20": "3Z7wN64kipFz6PdfRcP3C4gsUbL15BJZLjL2nMNzRDCstRpZSqyvriHrsujSMWba3or6FhLNfv16UuYG5gp1cWj6",
  "key21": "2m8oYENmtgZftZhQWXtna2Lj131nKTg8DX1vwJ9aCkrYnEujQTHSznt3GLuSvTPNyupBdUgoCtGU6pT8EUZYGe5j",
  "key22": "5qYnzsPWuHizF8eEiTXUKqgxhis2oYQunzBSMbHjf9pqGwKNHTsxpTARabYp7b3X1tnr1jYHQBjABZBkYQfWVHFj",
  "key23": "2okH46jFYREisYX3W76S6R4RyQmefGdA33Ucm8hHEB8LDidiSq41dbg9eSkaAJrFG7v7QWEUR4d1cELtL61URiYD",
  "key24": "3DBzQvq4KwT5kRzVYrpne4sPJqbsEDi3a6DnRyCjTz7VGnE67EFsKQmqdZVMhnMMdG3A8e4WmZ2fDd7ab1eLWbgm",
  "key25": "2mPzxGcZSZMKbARfrQUmYCfXLuZ8LE18jAPgKnmLMxxUQeSXrsjDACqAcGtPidrHtQuNDCXToHw4QUrkzKW6VDVe",
  "key26": "3VUdnZRybgWNmwepDAdcWonFnSETURruotVB8nHsvCN93rZ2EFRXoKsGfKtKG52qDkuFkEQh2nkUufDyJ6nHoypg",
  "key27": "4WopwJR7LWWnNFD24EARmMnoRcBseChEvTbY35sGYu6SiwvuMCLh6hHKNtKS1V879pYnwaoCZKPxdUoSwQV6ffLD",
  "key28": "511VvbYPGTAedHwwWKgu4j53RcVRvgPCcBN3kkyXn2cTDtYaYsapi3jFeBJzGde6t29gDmS7oixMBFNQFLe8eqxL",
  "key29": "2KcqD9P4vQnHmt6mCmc1A5FsLsShBwAzeQpBx2r8HwUMYokHbZMaXMPyQD9TwypReT9RtSwN1PSodRwNAyLATTFt",
  "key30": "32xufeCVDiHk1vkqgmxHgLatpuWWwY3W2wr2AsnwefMrmRpyfn5BQ4PKeEdegKAVmSSq8A1D7qjncBt35UqTWjfQ",
  "key31": "2DBeJdEjXV1t9uhKaJDumN14oCru42ED2GGS4bpNxLiFkXPx9c5ntMN6kuXMZ7Qae4HPNwUiCwAFsFpzyrpFLK8y",
  "key32": "2vNhdrBApwZuoPefAhReC97Rhig65kGkYAeL5jbmBDhDBM8kuxDpHY9xgEQ6QnMSFVyAyYiCBGMDHxVPB4AYfaqE",
  "key33": "3Fm6KPTbBUDsENYBM4UfabJVNwCTE7ZkymJAwgzmWYc3wStev9qiwbU9mayog9sJZMtE4uZfnH68LS6JxmSKV7Wt",
  "key34": "4aNHkj74WGzbXts9m1ZqXKEHyZVFt6J3KMztcRE1Y7YEWrvQ52PNvtyhHug9piLysieL9JfHnKsfsWENTYYBU6L4",
  "key35": "2SvfZS4vbCzyrhTinSg27yCnXZ3g4JvWFkSEa9X3w1LphCmGorJj8gvVC5upFPYk4hTfgja3rYQmLXqc3SNB4zSj",
  "key36": "ryF6PTyHK9RoWrgu18wZ2dtM9BejDKfXpx456KcMBknXZUpFJq5Nw4RGLZBSxqKcVLWwF7keVguNCRMmT52UXLe",
  "key37": "3VVCVrXyx9AFeKdDp285e3PFbzs7TRudh9c1ZYNkvLNBs64smxmSjvkyqisrpxNrxgVu6oDHCiHCURkq2HXV6Dc",
  "key38": "QzPY4bMyU79mRZA3FnaQjXGY24GZsRZoyKBevnQgiKXNs7VtxLb4jqzZE1Y63Vv7yTigH95GFwGWuqpve2jFtTH",
  "key39": "4fbwae4Z92CoSurdR89RJxTHGXVrdJDZdMHhjzpLknhfZdqVGg7h6ZJcE2Y3PvsXV4NwGGmSEgp1UGHzspfgXgbY",
  "key40": "V2FPZwXjUNr29xDYfM4JDrjjmk8CWkZnEwuvCKGSpQLtbjvpsWWnnMNx26AhMsJPoeeJrNFW4TMYEKKEVJq6wii",
  "key41": "224xktjhi17yELbS8H8J33H5m7JXLrkjpRD2DbsgzjuwGQiH3zDaHgAW3aXekf21UoKqgVKSbnQQGEHDFCQg46Fo",
  "key42": "3BNCrrh8QnNKrofLacNMGDi5esJVKA3ozNdWiesaLtMDJ5k7K1SQNDcQdaGigbGx9LxvoF8KFcZb7EDmE5HRXQmE",
  "key43": "PHxJbr9fKzYBo7maq6F1DmVkkDqQXdue5Dssx26MvGLTQnDRmEBz4dg88qH5eHZfiiWcRZyTAfaNQbzdCy92ndN",
  "key44": "5eYjqxnAp4unh7wbitM1ifRN1voNjvgkhRgSEvKJJR6Mrm2fTtS4DvJVq5cLGxvkPWhFrqn2iJzVRfYqDTsLJW2F",
  "key45": "4jYLWN1hLd1AgW8Ey2c3uh43EJwtx24GDXmV9dbBjkk81QaYHF21LubExU5F83Eix5Qud25wpADQDGyjGZUmjXde",
  "key46": "5xAx1cik3z5FmK4mkXduPugWuhoJazL69Br7tdvVB67u3qRdgJRXdNCgT1V6zUXQs3jGPtkP73PBf7nmJigCpPfE"
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
