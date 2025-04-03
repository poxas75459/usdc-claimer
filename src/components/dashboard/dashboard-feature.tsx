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
    "5UDbxV5ytnFFhTT5W3DzFL51DVrh3BC2sPR8w4R1MTE6MS87LNs9CMkZdSaP48QTdKzb3PsHF4WwqX7EueMm3vSU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61f4YV6o7vC25M8A6cQoA7JjoAtYnLBHFfQXNLJCtUAbn8ZBCyvPCpKCfimgJLBsWEbgwVGdx44Q7FjkCe2nc7nS",
  "key1": "HWpZ172RWHGkhbyTyB2ZW8DXopP4GsuZAfqdPb9VQZajjse2h5eGPfqYdrhYqG5rPf8DzEckwn4mLTAJGyhpruQ",
  "key2": "5ZX6ExbAN3CWfSjsieYeGibGM8DLLywwvfFgXY2LV3d2iTMDSWUS6DAP6aNSP8QtCtDp8pbrZw86sCR6gVpEksPD",
  "key3": "2jaBqPJsCdvM6kUDGgLgVvxNcWU4SzTMSsaD47HK6pPaFeuU4Gt3NwYDJCmBi49WwbFsZzGFjKHBGexJhtUVkSsa",
  "key4": "21AA5KArpbWNGvg5XW2DTZw94e8CfwzGKP4ksQgEZh7tnGuBrvXki1PJLvYidJf5nTaYfJmLSXfPKgtK6fmgEn4T",
  "key5": "5xq1xPuhhVCAc8a5KS4nLk1sCiY8J5ZajxjcXLAyyNBwViZj9buPGQszE4xULDe4VmeCcg7oGHhCBuNNV2wVjdBo",
  "key6": "1iTT8HkJuWtEoHwWt6nXAL6vPXoq897MecZwbJJriUYL4MLKvQWDE4vKJdtwLrxxbxf7avS2KqRrJ4RovsPkN5x",
  "key7": "5SRV4uLn41XatdFJ8yZiGCs47NZmmWC6qDmvgjW6LM2tKMP1bKkqj62C74L41AQXxFUuQ8FW15tfWWXfKsRdAPTH",
  "key8": "vqvkFt2zcFruuQStyFVXD4gb6DedPp9zjkNrkuytbBaMnr8FEru5RmzYBpNpvtAPqYhypbv1ZjZwPWbxG7paUUj",
  "key9": "3Zi5WNok9u1NUWEjieuNyMbVPTecW8brpQUF1wAPboCBFGTAd6nUrHW5dZWvEUCeB3sGsxKQKUvywSkfMMauQ7Pd",
  "key10": "2Pt9MpyXrWhKCRMQvnwQGnw5tVWengpiLknfN5JiN3so8ZDaLUHk23F7FbhHzousNZPfG1VrKYjptZjhnGsQnRiZ",
  "key11": "3rVPbhBaTg5aUtABvG7ZiZg4bs4qKAAsjsWkBDhBaYNuDfPoAsx4ZF9zCMoMJJFCWFa3WCCMhkMqCCZsr3fPzyUw",
  "key12": "3gDWYXNrM8D3u5FwwMdwhk7MXLoXhBuHPXqWoDZxkP84RazzAtgajwgnYt391FprQ9M8hcBohLRoS6YmpRtLvCks",
  "key13": "2ABe2nEHxaL8qdhBkFoLsHvcm9LSpaSvYMHx75HFZNt83nzXR77JXLpwqbWETV1ccUWHH5cmQGyF6L3MeXmB6Z8z",
  "key14": "3mwutFNPMDRFgSJ7ZY9TMDjgsqUs21NoHZo1pSGx2QQTNy7GLHzE9KsKpRCC318EMa8ZjrShiMwSpuPSJHqmDguQ",
  "key15": "tFDhUD5vdaWR9u1D5NmodcVWi3iJXUFQSTwMd4xzZb9QmqKSugNME4zjioCyGUP7q8qdvnBXq8ydqz8HKeeRMN3",
  "key16": "QU3m6jgBXStyNGdvqJgLF3ujEAybatazojXuDFujbjipRUjEv65BhZHfjRGv92RyxwM87ojefDqW12T3XjcaMmX",
  "key17": "54JKC4gHg5veFWYoXpZneHmJTMMwQVZtm41VFpVoNcB3E3bxqsDfeNQkyi94szH7rtMEhFK2VMFYhmQRRaGcWuFZ",
  "key18": "2kLUuVrD6j17SuFVZYKkZP782KMVaSsnG94pPDixvz22DCdrESqdndHosWKJsNidTCL6XobiLLBvmapQKvPDUfkV",
  "key19": "3URxhS75YsyKDdqnHitcxf5jd1m8CGcks9Tt8ZyKZT1Hd9oxMHMo5jtDaQ9hoQ3Jj1KTM67A18Li59dz3N4JAQHf",
  "key20": "4EdYVtYDeqrdXpgBukHD7T8UXwttWB6ojs8TcHXZnZ6s2heNRGJ6V5NaiPCyNjXEXi1zDLBZMH43iMWKxi3L3sTc",
  "key21": "2yJ1Xg9W3f3XpiyaXn5s3YzZkiFSQ2P9TvU1sJAuX7HwBYHH8g3jAYm7xTZftxYpfMavDsdK1QXG65WKa2TyPtih",
  "key22": "5t4fdtXaZczZg8i67gwx4uyGCnrjcmcEWtf4LYi9ukATtXuc489R9e8eRiaMRGUv2wUVLiwCVzBwWpk4GbT5QYt",
  "key23": "3npChADvqughTzZRwccZLvEjypCJey9on9mUEArxifpDxfVq2ofXnTrJRsUKuwQbd1z4dpS5vZ2ZWZvev3GKcoPc",
  "key24": "4TUUJ3urqQzDiu5udtnfy3vHkRKWcSCrnquh8Sfmqjnc6nnHrVpAaoQpzuzHPJdovDqK2yhc2Vija4ZzcPX4JBDL",
  "key25": "56rwgnXL2yFZEjKbzYtEWc2fYPobBzkPMrzpotFNhFmppHeNrCqkXx4MJHHh3fe4mDyYbdMTDgtxZNWKS9AppN7e",
  "key26": "34eftTsodWFgDmn3XgWNbmuQ3nhzwEj9oDBNV2h3rhiLuygkhYzrYVeS9d3F9FpWtUyP6V2TDcAAEhpxj6qxHRsj",
  "key27": "wooBifSNUPJMA5tbSSY4Fr1wJt8UddfhDQwxChjSpKK3M7XWdiQ2E2W7iYWQFPH1ZhaQ9aRGVzGNSvVqK5XTui7",
  "key28": "3UntYssgSpczZa49w5Q6N9AWMr4d4F2BiCT8T2Hxkfdhz9hoqaCm1wTqyXJJbvniRJjCqaoivpLjeR2UpjgXCGb5",
  "key29": "3aa4Yi4X2eUx4VyACJfJaj1aj3kn5qJiFypB7cDeFicpLrDYtmW4gseT1zaRtjQcft5S5ix9AjGN8bvjYSz6NW9U",
  "key30": "3dbuzWME3A5qezHvTSL2nNe1e4SwtUPu4VfGa6FhvtBYC1Ud7EB1HZuRFiurPidb7uJjCgAyQzJpc4M5H7HN1MvQ",
  "key31": "xXptJZJ2HbZqBq91zMBi2B5G7Qj87Za3DkM6EfutNZMqdYdhAiPvTHNMNbXnz89YzQGPtZ5LMUuuoXQkxrWUYTi",
  "key32": "xU5d2ZjQgZ7dLsCmp3q23UCXp5ENvumRXLx2zv5DDVLHUrfCQtcnweobJ5g51tGDmU1DwdW8bEwzFkfF9PuTr3i",
  "key33": "3ELafPuYwKWwEwnjUiVv7E6fEMtUDwiaQ7Xh1TJcPZ5CdWWhtHx4ixX5ujtgjJbrFszykfYuy3wKr2eKATXwhSja",
  "key34": "2E67WgKB872KBRkUKX1McBnj4tJWTm1W7qLHqmMtWuwHkCJWXBQCpiiFJ6knFEa9t8JwZXnwM6pTgW87g2Q9ovuY",
  "key35": "iLYyxuBWASfEqZ9VqeB5JGExK4onRKGBxSx57DKAVrzr4HtBUDCcCaUbSbUPFk43GR19BGGkBBESoJuJ7KhHJLr",
  "key36": "4DdaZAt5V1VqJ5UmdtML4Kwt8oKF8y3ej3JjTjVgxr8Jf2zrkafSP9f8xpZreEjGPzmT5ZLNq68tRv4zFaqC4RS1",
  "key37": "4R4gmMkDN4Wzyd2XtYDrTfewTgk4d6i3qr1FTEsekUCPLtjquxC1pXNHoKpdQRCjWJCjQNzsZehWZSVyewtzZ3Nt",
  "key38": "3kjiYkhRFaX9CRtbEx8d8y9sP4U3AabZ4hKu9PPdyDE5aZCVphEpDHp7STyMRQinHZeiwn9CVA8eSTfVXatMAtE2",
  "key39": "4tfSM9nQZCqPsA4vrzdRYwKVEM5dAm3pNm8hrtk9xuvwd9Z8RJooT8RHwmUKprf97A9vyhD25iqPzpSsfaH1pQfB",
  "key40": "4fznYACjXeCR739xmd8ZS5yW3d6rW5KKRMVDxGzBGzyvXPPmhaNAyBCBNyNDNn67CgFWyX22Ym1JbfLM4KqhqhaG",
  "key41": "3FaRPVpJKerrJr3erTvx6TdZG7pjDvXcFDbFn8LQ13b33U92QCnsV8xSraN8ZtgGsqgr7UiZbGc5o9PAkdqdPDgM",
  "key42": "5i8rnJs2MX2NyAvaawZUHVXBn5uPdcSpGiUWRmipRTd3dDzdR4FBWA7TNj5SCVi1GbH9C5im3FM7PJzFYaGrv6tr"
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
