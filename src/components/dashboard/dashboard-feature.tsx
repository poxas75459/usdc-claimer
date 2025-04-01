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
    "4JEKjt3aHgiXG8hbNJqNegaPAKsA2PZwUWJxPF6BwbJxceMYEPbB2bEUSusVDbeH6bqu2UUtKeBsdjTrLz9wtdYJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pnc6Aw4Gdr9cYFWJ6drm2cXBJmnmtaVsQX8idtjFybXKEQpSsjstCbRRZry3o72C3nGyYiDsS3t8H1MKsJncpWU",
  "key1": "5RspeQHNvNjkzGRvDQLUpzDmaqLg7VTvgZV3ywMsTynwxSYHTTrFU3VZ7x6kWMDSiYoUWRUFuxu1kLVennFaWtk7",
  "key2": "2PVMTYbdtxukRsdyjm5feXD4Y3kxMpVBVpw7VYtjzaWTMVJaX3wTBR4WukCa4x96W6uoyyY5dFZGKktL2x94TxnG",
  "key3": "3bDqM44k31vYpeKeztqVG3mSmDPkiNaMt22aZuFYzQNZhsyQwu3WwtdkbFGQyNTWiRtWHB4Y6fNYKhszeU14PrSJ",
  "key4": "4LHpVD7fsqAx1huYpoqgJ1vb3uV1bHR2BWgjteVXuoKd76PCMF7Nx15wBYLMniDYkMkkZiLwyawrJUtZHcrBA4B7",
  "key5": "4E7Js6iUasVEbLHoga7mLzKn7KLShmn1AQ2qhWjKmd7cdb5y8kYPooyrtGwvLSpqqWKKbq9r1zoqHZdj5K4ba4ff",
  "key6": "3aiWVFrhn7ABYtY5fffnXDCZLenVp6xBSadWean6XRwyGw7kk1UJRsBbCXDaacCfbLbENhWFtQ2K9mnmsdRhxD4h",
  "key7": "3JCLzjrYYohxmCrrcDFJMdvnxdxGHm8C4q3C9Lr6xwg9xGCxyuAZGsgeoxgE9uwzJ4KRTr17SuvmCzX6DhVd99DU",
  "key8": "5zSUBWgzUfX3nd8CpkoChNFqb9uezjBuzdbhYyvq5ahmqczVj3bW8zexNVsnCvq2MKxEcqd3r6ZWJdvhqidPfJVP",
  "key9": "5YnneYmhpUpLQcEq6U4dFHDVwUvcFxVAcFd97KY9y8DwpcorYunoN8ryRw3hJucoPkwbrb22NRSxKURwBz7T2nvz",
  "key10": "2gfhrPdj7aS8RkxZcG5aswbc6YKTU9qfZi5NfhqX3ksHhKnhGdwHMJhPEkeUtMY6FVR7RB3A9c1EUunju71iX3bQ",
  "key11": "5DSX1BjMcFRh1LYcy9W8qgotYEaSCuL5jfxMcKgbkxE9XmTAY6aD4h466FCjHNiSExsTTLPDymw87AJgu5NDMFAV",
  "key12": "3maYqrjaUwWnJX9r5Ad8zU3SFbuM46R2MWALAxg5h7LmkCh35Whxve6vTkdhmtotQmVyyibXd3DH7oTk9W7aCTxH",
  "key13": "3xXYyUnvVNc6QgqKZuUPdF2AGHaKkEYG1mfg8uv87ZDKoTow9F1oQ7stDCwCiEUyTQTD16Uxw4hhZpD2kX7gQYxv",
  "key14": "n5na5CyQYeXV2suHiDapq4W9ugVSqSpNP9Gwqp1makPTvN4cauJ9K9q1qHux37FWMWXQu7ypuCNh3ekffhPEW66",
  "key15": "4SBYwj79jMrAetaDkawYj34GjHc9vMkApe8gidDptSqZkfkS5t3PPRN6GGzgHRQzcuUpci96azWLqD1Czvh8T89w",
  "key16": "5gZ54L42tqxjZ4dx3ccMweajXcpMnFaK2yZEpCtFSf2naC6habv6ztuHZJjBPhu7bDZJtXnNfoPmbrt7PaF1UjaZ",
  "key17": "5s9AEToajRRZTRp3LmsrSxvuegJZZRU92MPPgrYBnx7z3FWvP9rh7sEpHU7FzquwZ6GHqi1ve3XwuVnrK9nL7h5e",
  "key18": "bR7Z5B5JGHsaYct6xDprsAPhyWb4bY3C7WG6z611wniNmT5UcujsdiL4iwiauSoPKadx5N49Fs3JcBKxAXxwvbY",
  "key19": "4u64DA2HTtVubKYiYgHdAVx5CGJGW1UtR2W3XYNw3YseLUeuTg2t8maTo1tT34A7N2ajWePAvMWtbNnSpXW9xjuB",
  "key20": "2qboDYbsiCiG7pqGysAav8ykef4YPoKmBpryXBwb8BwwMsXPaaBtqcW56PWM56VCUUpJTsiTBqJJXjAgAXpihcdQ",
  "key21": "4KgYJ6c2V5FSeg9VwrfKUyQMHnme6vrELf1qf1W7ZX74DfGY1XX1BLyEEwZsRmmPU3oGzPAXNzjgkVkT92trTWRp",
  "key22": "LXhGEya2UzdvXfNR1tUAJnS5GsDSWwg9DURzHs8LwMknhpHrppL27ycBYyT2R6M8Nn4oJHfbcPws5oKRRVnrzQV",
  "key23": "4Q6fa9BShgiWRBhdBTVzZ7At1igWhSJRsDV5PTz1yDsee3WkWAm1eKtz1cp3SzrT4q267b9uQHHPcMWAcX6yQwvP",
  "key24": "3JQm6UwB2JLFwEVdAAdR3V171qX3B1SqbAtJ5GxQBhARuzGFnDViQf7N6wzb1wpbh2Hr8Mpuvn6PoDtdtPXRgxaX",
  "key25": "4SPFS9jUfcjhTGchXG5UTHJgoGUcsaXEtgD79AwnbQ6Nbef9tqN1FDjim719xQUoXCTcuLuDtG3a591omsA1iSf3",
  "key26": "4TfpgZ1qbgH3Z29zrMd7vkL5WC1dxUHeACwH3BarAQMRoAEPKpDr3bWWd8EPiiKvfDGiqnuoFU51udGJ78s6ZEmW",
  "key27": "S8SiEEoDzcPSUasSXXgbue98MH6C67WiDeZaE1Fa8Cx7BruFzWmyaJuLvoihPLKNPjb4V4fDKkzoxhZWuxD2NSV",
  "key28": "4X849SmqcfUvVCDXdRkTVcW3G4CHjr1o25mr18n7qzbkX2wBQ2jDvQprQs5SjUQkE9kADjJzbMbeA2t98EkAQ8y8",
  "key29": "X7dQLxKuMtM2P85ut4Ed323wwsijDusXumHq2xaraMhHPpmpwAo1DKHwe1uLytU7A3xUhk3P8Qb4vpTWmB8VL1L",
  "key30": "3TcxEYfWzWMgewHRjr4FTF21zELT2kTvq1beHoNiRX8BFipniUh25F712LCVKxDW9zimC184qQfZBPFk9726WccG",
  "key31": "213Ew2Kexh4JH7Xw1x7EfGKz69HwLxi982MhAiKomMdBj7RjAda89sUbFJEGx49wkbN63UvLbXQkwNT9ChGBHYFu",
  "key32": "4EbACug1vatUmB1SreFTHXu6b7nsqyW2QBUYJDTLhpzMkfS2y65ekajTRgGifhnqbjBWSXJrZpM1wPq1WaMfuXPp",
  "key33": "62p4LU3bZGUCs6mTJ71sPevdVqi22yNK5ZLrr5Wk2YgbhLtoydb5e4zDt9ENJwQyLCNtLHvaGp4JrarbBM15BsdE"
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
