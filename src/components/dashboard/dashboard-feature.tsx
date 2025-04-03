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
    "5ntChM9WqD3m4ekEhvAicEgARP9MnP9nbBmktHjvevtFjEsvBWN7swjo9Jka2jhWYXST6SkQigrxy2iUfni8fELX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21dapykvLRjhJmN65bxK6QWaPcmwtozPh9ZpmoXMFBHWk5qHoHTkXK3q8Kei2NZKqm1EoTtVNNh2MXexoaVhKieP",
  "key1": "ecXSZ4vpnk6nMmNUTNRWNrRRqdLM3Cm12DqRDwQPGRTYHvzpHogUfbFWU9Bba9hgm6DBihae9mvpLUwN1FNNmci",
  "key2": "4e15oB2aQrEcUHZkfT5QCYFLMCu2buYXansTVu8jLtjvxU1rpxXLG68Ua3Yx29bkHJHT89DnWH9ctd4FQjBGeNCX",
  "key3": "37m4j6QfcdTaohimddbn8s8w8fj5XQhvmHAjeYGar72RAXq7dAAcDxPK9HBcM3JF8SYTzgPVTy4wVv8nGxQZV5td",
  "key4": "gf3zFqi2FX1xXaKYRyjf5zkppo3pCMu6hrihctQHsN1YvoFqLqN36PTdRvmDvxLpG8YawXeearTsEvKt1zQhA9t",
  "key5": "5AGhUpxQ21wRhVgUKtjRy6TRnz87RTECYpAEDH44Fr65Nd54okPQCpKcZAEwqFFe3qVYtTRY7b3faw97xWra2cNu",
  "key6": "ZSZiokjyYmVtjAwC8i2ULd9oZvmwcmsoiGrYC6bpuVYYNXbJUB7xGJDdsxpLELC54jrvRqihg9ctmJwvz1hyjnX",
  "key7": "2hggjhid24RwNkQ7mi3DtCsp8x3J289fo2CWx6MzunKoy6RVC1cu42xE2nDXn5sXNy3uJQXu38HTdrTFoi9WRbbx",
  "key8": "wiHJgZGBPht2AJ2UYwgGn4Qictk875m9PHV28C5rZsKBSasjxGFCBGFZjt2HVX7MpvWyh8dHfLg7C59q42rEWSV",
  "key9": "5amxv4MTG1dirLKqq9qwx2cVCdCXyCcLNN938opCKBqoXsJP3Zng75QUooYqNM1eqJUFa7KGDQvKpLxZx4srUhqm",
  "key10": "hCjaXregnpEQaQ81ZFym5y1HPRZxwSYqcYAa3Jb9nXJt6tqvgeD3DNX7ryL7w9WdgfH7oyFj7FmeDaAFgw7Dm16",
  "key11": "5HtctBaiC1xazaJn8LkJw8ZLvwEvW28eRqL5Ht29mCU4DLybcoqAFBYDpWz77VzjYQ3B2HdVHToAXWNYZv7x3ohz",
  "key12": "3BqmAJPeemUawh2WqjBmFZ7RZX723zomJzm2uaYWBYqiVDtRynPygf34xhRz3gHHeAvZ4WHw4psAKcab71pWaQ6q",
  "key13": "4scTeN7jeYUgqLbGem3ju7d1ss3jo9TAzisE4p7DuMrmYmPCo41qoybv7Na5hsttzNM1ivNuf8znBYQBhnkD5wH7",
  "key14": "2s6YsW5k4edU4tW7EAmiSZgGcHd2UkqVwC5yX3v1cfjSQ4dr4Q3VztTL8VTjeiQLAbJsJYqYq46NBBHBy9acxVMf",
  "key15": "U93mWu9S9iXyPfNXqjr7RvSzHC72NR2srUVgDNStBonsfzsMoGMDEbDpYsbfXGcDC5X7a5UdmqPUW4E4RHxpyps",
  "key16": "4BBWLRDV7BVCu8YFQZSyB47zn7YNzay1ecVTyZtZcLLCAZKMkVqKjWwsH5xM6Mctvd3sGVt9oxfTWn1UHHExbzz2",
  "key17": "5j2tu2DvJxAn4Zvqz1uo5tMmk4TC8YvPkPKTMKMMXycepLtMUNdxABauQ5GhMbdjzfqWcrFBdYWhKgu6a7pNaHjd",
  "key18": "3N9UZJNJGjCyh542Rqty3uZbroJRXfYjftxXTxfkEvuDkUwVBgQ3hk3z8TK4eQ7b8uhJ7gowr1h7Tk9kQ4cpzj8h",
  "key19": "2x4STUnQW7dzDC5d3yv1wsLpax1B9B1vuoH6nem9zrRhvmN2vSExdFuPiScgHogHk4Yra6XFpHm2auieQkNMA6mP",
  "key20": "67EST6gZrHcVr3ycfezw6SEBdoFVXrUavSYJHtSoyDPErBADRwfhcvxx7kS17z4ZYndaiFcsL2eNXaBP5pGrsB9c",
  "key21": "2hpzSFTzZVHuKpB4iKK8S9iii1LbuqknQiEKVSnZaZGq7Nb4S7kuLuck7HXYJ7W7neTkjMnkV2zgnKij22DbPWdm",
  "key22": "kJDb8yNcsFxf9XfVxuwfCsQqZftsJzNnv4WKrU9yxNW5V8VBFZEWPMwKWdZT7ztdhXYhsq5UjCRpGQ4t5q1B1tQ",
  "key23": "64GADoaZtXBchPM1DFRKiq6MAdpazqnnum4V3yKCicAf5uY6wEU74iT9ozWkN2zcWcQyiducuNZfJpqjAH6ELrsB",
  "key24": "2sRZ9JJXoivajxkSky7V3goJHfGwyJWbXc7TQC5kPM2BSkH235P8zUm5HuRbRmfBiUpWZavEvxCWL6dhUpPauPMZ",
  "key25": "AsiCVKA8abnMsALTKyMi1BWjz7Ui5rE1KZDkkut9tF3QhGcxcwbAs2rxLRccXfvkFqkpyLPEFsPuRS3cSeoenGJ",
  "key26": "3cQHV6X2nzTwhbqPndw3BtFu6K1ZQ9WMN3bDooLdX2fNCqU55M4CrcYd6j6hR9sfqQT345fWPFXuvQp9VrhDwCgb",
  "key27": "ebPZ5C7csUQu9LriuPeUdHDLjrHtP9evFZUs4HhWBB1MJXbp8XKN9PVfXww4CRgKAjeSz4Z9KUGyN7EdvhTAEii",
  "key28": "4PnxHMSQWQen5q9RPDTAtxwC7Xt5ynaPPd5rJuyevngSBkDqZuK9gNNgabigcJzT9up6wY1XpV3GwRhzdjrXyRBi",
  "key29": "yz1sofQFgN6b96vb47iG8Wf3KDv7dmy8LhBJrq5eY7GE9mByLRkrshz68QuaBiKB4x1nUDJj4vd6xadCExfTRWj",
  "key30": "2dubkQwtiKgYSwo7UjDs5i6rzE4xwMzBZtBTSAFvwaD3pnwnZNqMUprbmeAKjaAxikBVLocsfM4JuA5HocpyY6hM",
  "key31": "4fSRnHPRExpqKrxN5Debeqx4HckJpxvbNik2vooHAo9ggibWjJHLJ5QUdsNt3YyVtA8Rc1BYFKMqoPGMMUNVaVjm",
  "key32": "Zbj3vYYTvvSjw2sWdsWiEj7PZJv5rcz5pifZNcj14Axw8a7cZKfGaw9Ui6PMXUmeaxyi6KMtm7kredQHF8z1fen",
  "key33": "4XqYse8tLANhiMiTnzDudPGXTXYxif13QscvQLHecuQexhMMChtasaZqzMuXzJkD5CUFgJ7ofZq7yshVtRcYopV",
  "key34": "yyCsFBkH2cWSE9jbxPreqPfgAqYzSDX8msq7etHu9EkVHrj94FoZd4wycAVijgNGGL75ePzHREaDT2ZBcrNzA8h",
  "key35": "2BXsEovBMcKdbz5ZQDrnYk2WsfBCktomTruUfhJMLKW8yZbynhTek83qNwRYQ7B1MPELxpuzLxZmcYpBraTjU3sP",
  "key36": "5bAA5XwZ7iNW8rp4xxewTx77iu9GRJbB3XL6UAHbLwGxeSQpe3bpKMcamgVAaBpD2GTL2YdX2qRyLHkLpTMCsaKD",
  "key37": "3zTty9LUWF8Z5GNvHnkpGSAsxaSyu1B62MdisM6zXN3wzChj5NPSVNTFPT6ZoXDasz6ET6ywusKt4DagnUP7MhN7",
  "key38": "4YiAuKb1qcpWktsuBfEA933tA3CBmyC5Cu3xSgdojsr3mPx9GX4St5aHC4psFVEYtqbqwUFx39N7V1NBNAPJxw77",
  "key39": "3rDryFsQ2GwgE1DsBBekVHmrik2K1WZde5aumGtCEV23ozvLybHnpwA9y5RWQ2QDfmWrSzpVVEZ41QkiUsL5t9gR",
  "key40": "igWViUzaksku5uvSPcyvKbzBNkrWs4SYKHZ5XmArNiaVjdTSvSbB1r7bvJQwhWkyRPU5ebVT5pcmAc7KxahABa8",
  "key41": "3U9Teu9MoWaWvbdUyFUK4Ut7DHHTuogkmgL9f457hs8hn1KxHbJWtUAi146bA8znF6RgTAnnet71BaCsRQfMxgT1",
  "key42": "5eAts4uaRDSQ4XWoZewaC57rsy8dWRDVgwiKoj4bc1NSfcgAZzpvJkGuwnDQgXYYDn9KGwZDyWjkLPH8nQ1R4Rqu",
  "key43": "2BTMyd7gmPQbYmRpE18Ad7XgEfo2x7iMPfbpC51JK5kY9PEvEgy9oPyEefS8AvC9dHQZRry8nUg2SMZsR3cb7qjo",
  "key44": "44UT7YEi33SDmver4MQ8UtSLuyeogekqGGDRcfsYVFFH8PdrsJqdVJS3bHL7r5g8NtFjM4FW5zwdhCH8Q1tRZmBR",
  "key45": "T9Hyi2jnPac6tttuHN33KsZavHh2UDomVtiA1Tz9Vd28M6CMRarXdrXxNF1sYbxD4vUZEEKSKoXzaqiMEedaA2N",
  "key46": "3HtLb9shJNKdJS6xdQu2rNhcjSnGPXnorQTSN4S7k5BfkKSfsGsJtPPncC43eW1uZH2MfLmCETuxZ6tPCz5qYgNm"
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
