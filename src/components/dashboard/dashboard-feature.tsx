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
    "Ruik62Q2rHSZ6eMPWkrU89ySouqeA73rXLoAMPmu1BndcPyCWjEzh5orjCjZ5pdbqRpceYKzUWkiPa6siJTtYFk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25ySLsAPJtFscxE4khkbNtppkfXJE3N746YwTm9DDUnPaXV2gm8pCD63R4v4uYM8SEZR89UARcXnJu3poeatUkFP",
  "key1": "2QfJDa2vU39ynujK7bwxGAZesXLQ1wYQgZEUwCiUhb8Zmx3NibidZqpxeUb513hRF24BEMgqpME93X4HuYquNLUB",
  "key2": "24LZ5DFFmgqfFqG8aQgM7d4JpHcWF3HoDTt2AVX8hqv7Wq2UgzbLz7aCe5ftPxaVscy6ibwgNwYoCynT37FvJDZX",
  "key3": "3MVHkZccAFznnhK3aQzRk334ao4V1NdfQeqpevzQFZFbsNuTpLj7KagDLVDhdfRJWcYBzcKsNbn9pryVaCBurMxd",
  "key4": "KVJgvPzhq4YKJUy2FKNHBha7AL5o5xVdzxvE869BX7U5MbJzhZCoMxG74j4UUmWpRutaZzwLVdZFFLzE4CuYNw7",
  "key5": "5vco8RgfJ5Q5EiYiTMpewmNe1FkDN3wTbc2MJHLAEhzGDDAj9jPtTr2ZXMju6mbDT76s49W76f12L5eJJY9gjkx7",
  "key6": "ifQDstEbhg4EPydEchdm8YKzLWnfaeQ7dTWzxbJ1z3V8F1bBPGg6LUHDKiX5cuWi58p4mWLRkF8ic9MUx8esZqD",
  "key7": "4v4wzv4D3tR5npoFuYURcJFyzXDZvNxNV2v5Wb1ivxCrMVa4HeBREEsenmsh8jz5Fg6PV7eRQETy2TAVo7QVvRrM",
  "key8": "5wHqY4SpNWsdF8afXVwAQ25Yj3BwZ72QEEekCrKRmd21hYdrabz46zEPYbXKK5hTbbFmdANG7ac4gN1f2F3uM4kS",
  "key9": "2kaYZSfFCER5pEvpXJEx5TvUPDXuFHERX9ag9JPRwNHAinxAtQYyCjfmWM8hZqoYAEjq8KKhB7LpRGzfzMka9yK2",
  "key10": "3ZnfHWic4Qerj5jFxi1HVHvP29FGgComxMW516eAPZWW49j2QTp4Fkawk9ZYbyLmcbMkRyH9EnA4b9QEtfdWy8AG",
  "key11": "4ULGBF2TVspW27tcauvGEwEotR3EQNYbrvJers1VMZnfpPtQRaeMRu8rCQUh2syKQRKiFmPwaqcKL9SjKhrK4ByS",
  "key12": "4VjQZVrbpUsq2ecXwFw6qDtwn7YvShCB3tYmYjuGyr26JudeZqVj1MveupTkdVDWJznbEekBmmUYwP6ZRbdLGcr9",
  "key13": "4NK6mCEkzkoJQF9TvNDVt4LkDgL2M7mVspdW4NbD3M9YrgvuAUw8mo7oqjrD396jWpiRw8a7FKNkEVTKHUFZ4JNV",
  "key14": "3MPgVCyQnAviRd5Sdq4mJsq4fCgp1d69SFrWS1Vta4HKgcLWCe9yMydzTscJKJuuAp9fvwqMMh6mNsYLJkv6j22D",
  "key15": "AEQrqYLDS5fkASw5adsAjsj6epUNh3XeTJdDomAZYJWPPxfof4LZAPT72rY4H7zJHDTTXU3pwGxTHYC327fkQgX",
  "key16": "2VB9wtTkUJWYTsHcWYvEXPvx8qz8Bs9KEZmKzNHQVudbKhZfJAUCRVyixgRkLMNsdLWjeYF4JizQoD7iLP7hsXwp",
  "key17": "5xt8ex1gkJXVYCXCbctP4MK3JEYyjP2jBQ6AYe63dEXSbXQXgJ6nonCZPsT3dgy5fSvr1uUN5XX2qyExke4u8MQF",
  "key18": "3s7oLeMu3PVDJYip2uZ8iX7qHimGzsg7r21vu2wCDPtMnm4eu2fhiJHrecm3jtQ4droCSv4KzEM8W8BnAJJNiHT7",
  "key19": "5cUfMj8r7tcGjn8fozdvcUx2x8KE5dGyRSwsCp3twXKcKZNakFg8hE8KugZcgF7nTSqWFKJw8n1YHw1jYj5zwegY",
  "key20": "5iB5LASQ4oQmPepRRbuC5CrfY8kDkizpWJkPWm2AAAQwXMpnXDE5JZwk6ZHphbpnsZNvcNQapSWPgHADhtZKhaxs",
  "key21": "31Ss6G1ndKHiAoV8RfWEvAR3D2JdXjTnBnGyWmePQt2PT3nP3Tz3V62Xm22voGUYpL8dWcL2pGHv75krNussS9gY",
  "key22": "FG7VUrZ5ZA9DoXxUSgWwYYwfptpCZo9jkrXXdy8LdWoUVse8kf5gBrFVZwAAzcn59xGGetqftACmp2vKnrgvFt2",
  "key23": "4PGTF4JgK3oU3yokC6GzYv2P2oEhwH6YwjDihPGMFL2Dmdq8qc3pk94cfKKURjdA3vECR9RmGy7UMdCykksa3DHX",
  "key24": "4DqP5Qfwu3QByF7ED45hYuJ9HkiydgLnVuqeb8T9j3reCaudCc82gbea9mpkVaqCrtr3npJbmAFqxbvd7USeuGjP",
  "key25": "WbjvfTGk7LPSCDUzCfdU1Pif68ghcpYmcXhN7pvZVWQdSdx9TqYMm8b1tBSRN4XZdXC1EN9NwGSzHECSfRdH4dN",
  "key26": "32uChaZDL7FZXaM3u84466NMjijsJE1T6pXYF4GZPLASsuAV12qDUdKqHiAnXCuDRiALsi2ErBTw1RMJ8htCmv3D",
  "key27": "LdJm53hYvf929vMy79GXN5Yt7miqdhoM8K7gNTxKRJrG3A6GMhq9WbFAsx3x9JMb4Wu2Y3z7yLecJtVGMPsesBy",
  "key28": "3kvU8Ez7kSp895XghY5jnNRVJxd4M7D9ehaSKQw7HZL23Pq1ScZswDTeMVaxB7NUTWmhFBGGdN91BKuzCZSXWuB6",
  "key29": "5copFxa6TzFaRN92M2nJ4FaCBmzEax4ttYKkJTqSmiA4tKM2iXwpSM6HnhwBVqXyt31U9CcYWDxBGURMKQt8awo7",
  "key30": "VZyazw8RQKWMEvbrHk93LJuVbSMeXgfRdC527suhZQGrF5hCh4oLVRY3ar6VEZpTKymsBco3CNBbHoHnHCmdsxX",
  "key31": "5T3F76Mh41Vg3hsNYVuhJ828wMnFUKTajetQKJemjmhmYXouD54q1wpcPHmuYfGrSAuvGjs1W3ePt2puz6hK5dYA",
  "key32": "vfrEEwWcfRBKpzM8AXa4ka3KJqw8TgWE9Uv8vzUEntQP8qwiWaapPpn7bPfv7zdvV6M7Jf68v14dRCcuTRTQGAP",
  "key33": "zz58A8yBzpkMaPz1x17b89p76X1nrD9vRRCJyK1EW9XsZXJUHu2dp5sWWNbRdcruCBr6uitsUER3bpp1M9rG7mi",
  "key34": "wZX2KLF4CQNebEVMtSoERc7aYwSZTxB25Lowx7V2e6NjCMRvdkN8bjU361XidpK9Xww1YGw9xn1o5okELYuhEwx",
  "key35": "MCrtwW3HBC43r1WByZYJdMwtyTijc9mRgPj16YUzJoh1DXCK5n9M8XwqkVCEh4z83pw5J4EGVNsmc5Wg8q2UC2u",
  "key36": "49kF7akfJcjvQ9USsmBF3s1VL2mntEC9uSwXi8YiDijaJat2SpUJtLEDMbEi4cCR8BFdhGFw8xFTy1cSzncCTH53",
  "key37": "57M23L43aAL1jdrkSQV9e3hBWm58m27wmMEhj7saEhj7Hpjs17ioSzYRTS1RDZZ6N27HTYezD6SdMw7gFrxCYPVc",
  "key38": "2VP6pMcX8Lgn3zSNKUFEG8V6SvnEyGXA8U4FciPoCsYYpBXRvRBz4N6UrHZnQNJZmpQhS5SFBXMiP1aXYRoW3RaV",
  "key39": "rVNhGj4jMX5J9eW61fWt5eSAbS5pEATvB8Xt7qQAbRJK3d8aCRyMWaLQGruUiRhMQvWoycAcDA76zUZfEB5bQxW",
  "key40": "3fhpvMoUoSL639ydjPy3V358d5bBMnUqThMQgqpV1GJdZSrA5zCWtpvnsVRd9gR9Z6Zx5sa44gA1z5Cydojrya9K",
  "key41": "25rHvVAbMhr75DwpozgnaBuojA9BSvJiFbi8ic8zs5t4XXtyui6sp62VT6SaJDTJbJYsogjCaxTN2LKdtB6JgyLu",
  "key42": "2mqs9WSKqb557sFRwUwMp1aifxHaRjYYjRu9e7FCjoXXzznXkH99YtL34ppA6YrLYC2tqxSo8wcDwCp9w7nHrbzm",
  "key43": "4e2PUn1cKNLEgEGTS9zqpAXhLJmSzUPGJMtMpx2U2PJESXY4YhpJjPJTNMUGUzpV1ndn3XRMxZuxcnYc6trdVtiP",
  "key44": "58VeietRNSfuGi58ATf2Z3fGQx8wMzHe7A489cnPAhYH7F54s1HS89rA7Y2KkiJiTYARtCVBM5PLkB5zRfCL9Mxh",
  "key45": "SkhfwGD7z5BrRfdqS7g9pjHFMhAkKBFvJKzAMqmsVpanjvSkdnvTPPNKpfy4GRTW2fd8meHwosspQHkgvr4ota2",
  "key46": "gkz2fcerobpfp89QdffKKhfS1Uf9SMz94yRfKSKRLsykgdeXa7YBypSTXyw44CtxKoXWNMpBwDU9wAkJqjg4FgL"
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
