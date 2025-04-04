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
    "fNUFrqcKCsvnfj1MvgWd6hgDoLPZB1KcF2xCRW6RyXwiBDCuLgd21wDpgJqAbnNH1ZpWKvqNHG5zdcrjEdrCcLR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Ew731ETGsfzStH6xsUTDmDM1WjVYFb4ByttKfFScF7kDpqJpR6T1PtZv16yiqvGfycCnaspb4jDBoFmv3FrgXVo",
  "key1": "4dS5eLoazTmMS81kEFbAZXvio6QrZnm4shbYf1AWjHxwy2F6aNpFqT4syy3f843JQKo5798AHD7w7YbLT3b78tKs",
  "key2": "5kcARGBJsQc1SoBdqSm1TZU7ZR21UDi3JymLNPuVusGSmxBavWPLJ6Zbtu8nzJT5WUDKd7VPixdNGzMWexyCuyXg",
  "key3": "3q9fd9XPDL5HL2wwqeQyVAPh39MttMzCZdsbFfTdwTtgirMT5UMJz1fJT4F5r73xjmn31wqymNPk1Mdnnk7epr26",
  "key4": "4yFQD1TrY8cTMMXuJgkc6zBMoaZebeenQea91jR572sTpW2ivsELJpeHBJ63aNQSWK2C5KmpEAzMQwPVG6XQqDaC",
  "key5": "jEkLdL3VohCYMvncLCzfCtBTY77ACgN87BDW578JfhUXFaWLsUvEBXXyNi2q8hMtzgLq8eUXUGNQRE9FT2gJqyD",
  "key6": "27ZnhLzKwVdQ3QaDfJn5DKS6SHerrGJCiLwqx7ExCyvAFToEeTgte7UzESdko6xmLZV1sigpx4J7vGqXxB596z6m",
  "key7": "pybmUSp2GFSPDbs3ge4psJ1J4FE5AKD2nbHJW35G2fs2RD5cfRg3qFmxAFXwW1zCL4GvZQ6VAR7K9GrMPjVMwkA",
  "key8": "3m3cNqa2B1knmgb45Bp18x7iT4y3VJMApqXgsonsgAsDVZrBsPqPN1H9HZVLuVcBmKRXpfwuEYJ3SsnV72BUnJfu",
  "key9": "iWtVAL2J2ivfECVUXWVeQVz3NQMTE2JHyDkHnfM9Ctw4BFZ7uWnyvqBqBYpLAjGafR1ULcENWayERRkReHa8Xjr",
  "key10": "3bEkNKoao8FrdtcKiDfJtXbY4wUY2VU3ugB4UsegLvdYDPvx7J5eNpgYfTiJHnCvn3MTmUmRJRarASmgLybwRZyU",
  "key11": "5x65X7VQVSrG2ipwQfZBr7WF1ueeVsk1nHoykV5frPsmur3smngtTR7oZfctMGR21qffhqWyKWhCAjTuqLh17SRc",
  "key12": "2voxbYJFrMucdEPag8KmH6meev6mskztuVCWHEALBw7zLZEzJz8bXWquxUfMsQ1XHGkLsMPhd4E3wZLbvCMiRvfX",
  "key13": "43GWK5yKJCyFLcpryAYdWcmPEgCf6ENkqwxa7LnuBGotkgVemFeECQcXQJyZvHRqJiSFidQvZTMtKHafJZvmBwW4",
  "key14": "2V3u391KjJCPNV7gRFAcc8wcWfTkUMt1GSHGiSxNrqFNrJ5QhBcKfCy5PSZNTNtLMYKfw9Xsiz3oJRBM4a66m7u9",
  "key15": "59ykr54qMK6rePtALnbjGNBtihPJUActiQsvzJoua8ooSSbcNxqveSKPQUy7bC82CuP37t7tLLXXQJPVAN58xJ9w",
  "key16": "5en8xqg9WiCjBy3bzsEH9r5WK5TbBNZvQVEaDvTMhDDQQBCnZC4TTPGApF2sCjJL49swiETFhDod477Pipgiv2XG",
  "key17": "FRGnFpYSvy6dLJDdQAyxApgeA9ReApyw6ipSz6hdwZJVGHjg5dw4YmgmQnk8PmgTnG8yzsBj8hBQdGCuspaeLUB",
  "key18": "juH1D9mpvTvG24wD8QRNbKM9y5z4TMYmnfya4Znszexkd2byaVANWTsimcpouvewC79bci46FKnpuJZZPD8ffjA",
  "key19": "2anb32fWFsa8ttCmq4UdFTUG3BHtshzZ9ioyYbzHjzV4UTKnZ39frCacwymPZRbrPkvjPWzZr8tMw7KGThuqDMZC",
  "key20": "4LaCSpkoUppfJmK71wjG4dJjS1jxh3fKRtXjBYfZTxaR9qh3qPR8q8DVgYE2vtzmTMSRTsTnf8NkmnS1erHJtEQ7",
  "key21": "5zRKgqNhpuKfRJWKMT4eG8FFTy9a8xR1BEuPAjoYEogC6fnadx4jcp7Y6VgUZEvz7Gi9451vFvzJooUY6ojj24ZQ",
  "key22": "3CsJ6B6FQUVeLy6DLFoPqahDdHJWCV8cKW2nDsN6RxXY6wAQuaCQCjMbbc2guT4zqVuzBWF528KLviS9uuFnUphX",
  "key23": "7pV1dEYEj8qW9ynKvXJkg9oacH5o7QZwYjo1AxBfqVqhQHbWprWFK3FXqWh9DYjDgjViF1DxFnEZu7HSBsNV5NE",
  "key24": "2e6JWQ1BmEYFe7m4mpBJ2sQjD9E37gTSivkzrumUwqN42wwCm4JiyCaxMXidmtTVXuc635DyW2DRipuauVteeTm6",
  "key25": "2qybWj9EJHsSAvqQCgZSkXjYDMrUTkNtJFyC5tcCJrZXnxNW4Qo7kkhJdud6FWMAh3fA9ppDvG62TJGDtyB7egax",
  "key26": "5A3L2qrFmTQEpEeRLbXeatXkUKpVjuKhuBCeShiNWfTxeJmo3tDv7paMhA6odcYQsip1PYjdvTCJea15CGxJs3bx",
  "key27": "5acamubUtLnwGzZrsTPZs7M6U7A358Y8huDJ2X6TqHE5cnASFce3FNfBmeXXB9pBcsiuCgVLHQYb4bSSykt5EJAn",
  "key28": "2un3F4byU18Ykm7nW1WSNe3iGr9q71Zm8ugnUp5oNV9s9X1QtJryhAsv7bLfuXAoaH2tKANAF5WqMd9URMXRAuGj",
  "key29": "24zvw7H62sH5cyP2CKYWXwEgRWAUG8Y1JHqWG6LA6f2vX74aieJJBLr7LK8VLmDP3TDtd1tB4otx72GFGqrnjeiF",
  "key30": "56Czix3kkeu3K3KUgpUKRfZhyW5cmYZh7tPfLCwft74RWxz1r5JMLTvg4ouTbQiaLQxsib2EQwoDBB7DezfFPBHk",
  "key31": "46cp8jvwjbYbB6thPJaX6dNao9SRKSPaFbBfLeqUgYS635wG9qj9q9GqTctazjKuqU1LSJyWoevtnvvFtuTfFqNB"
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
