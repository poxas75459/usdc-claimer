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
    "C2J8asXzx92pnEvE6RwoymfVWKxHjRbibrPX8wRSEmuMWpSYS4eBjVaeAFnsDThHqXPpG32Ftw95zR14Qq9cM7x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dfCvxbEGSQPMqLaRukxMXJFxvP6Z9rPgCKFSw6hKRYKYXozviGLWQ16CmSWD4DWLTMDZyjxpwk5csPAxGfY1qh8",
  "key1": "4yFuzf8tDb7PpnewgekhQxVCtk4EomZkEHi1YSfcvWvEGD73KfcDTKXY5CPL5irGMgrNkgbuguaM6oxcNh5ugxfx",
  "key2": "4uACmjpv3eEZ99d1Sr2JqVCqBaSn6GKrNexz6JpXtSu2acmcRGeHgHJJbmduZM49XTByFGLcJAJ98RPbbW9qnDQV",
  "key3": "4n9mVPFKmvc1HNC2eZZ3kYJH1MBMiBXQ5DLsZ8ovqQHE5c684kxcuLsVg9VmaLfVc4bHECYvMkvR4AMjNpseMp7W",
  "key4": "RGTDcKN5cmsWoCENcT8qHQQejCfFXxCPeEKu1Xjgep5hcZD6E2M9m1TcSkoqCqPF6pJx3P3umyg6J2e6wRAtF2Y",
  "key5": "b765h6sTkyn8j1UtsTdWYJCYBMAmmmMCmVzfB3E13ZrR8ZHGCXoKqXGczA4oA8DuHZKwagKHu4G1NhLF5YhCCVR",
  "key6": "iPFEjMD5Nahzyru4KG9uquKTSNQmB1wsNnKp4WF3UxWdQPrQKH3rrpj9dFkBaq6UTsDTpR4oUyRH71hryyhBj41",
  "key7": "3cC5AL7E7Avwwhrp8cHbbhgW3CNS2ie7uZat7gtKRW149akkKeES249FPBSo8zFznayD9DjMZZqMmXSjAHEKyanf",
  "key8": "58BkkzRyLmsTJ8xdXBX97STSuX7ezj4MMeBk4D3HNhjMCWc9gvLFewMn8JZck7FXPY3H4MS39KDBGizw3Rj1X1Ad",
  "key9": "4XtL97EX5wTt4JBUMBVmnZy25Vbm41sHZ2ocMWgvTbw7GE7JAn8aoqksor5LqCC11xMiAi3kYYJFFairYV2xDCjp",
  "key10": "2BbcNsPZ7vcCxUnuCuBphxtHtXS7nt1cM6qz2zcovXvpNe3DKimygyhTmWP8watLpeaYziwxyAkpf3ECXt6ga1yA",
  "key11": "zwzmruXmrLJWAhruMrvDBbJNVPns7yGk98xdHpmZ7s6nm1FCdBymEVLPsHq6ZS9psgQpQjwi2LyoqNUuhLJ9NX9",
  "key12": "3TwwiZkiCuTrT2msdZxrKa3XEnrGajYqTdEpYQt8E5x9u4USwqxGcbZ5acGejhNQjJZ3FgrsjxXfPTnyhSRTeNus",
  "key13": "2zS1Lhs5SNX5HGvN8MWzutB7vLBuCHKgG4UwX8XrxaxRMtGw23AwFr8pDfQhZVJi8T9fUbvLvkwMGkoGqwoqqGR2",
  "key14": "5A7v4VhyX5foQJKsmy4TMrutiqUGJ3z9kChtHPN95tLhQx5XsVVt41jh36RMfetP5risAihVY9mpBc6L8LqVcKfX",
  "key15": "2zTHandaaZVR3HRss87xT14SeCf8wsB7yyBKKTEsBrbTq1e16aBuvep4uomo41s4nCbiWcXa5EPkrSozPbz81Hiu",
  "key16": "5DrgWqnEcFU2NkvCcwCsupHBUZQx6bJrbWHuugkVpa4kRPpJye5oNcUvMubBnmX6mz3bBDkbcBVetKzKexA1qbGD",
  "key17": "41uYRRhHB9Tm2Q94xbu99mSWd46en8qNi8oRnf7RomgvrKj8QXkekGYj5dsd322fFCh9FRxai1iweBKLyXyweiKp",
  "key18": "24VmoPBoGXnszg96Ybjh5ezNue2RLwTCoGHsm1SM8nknP1tgh1KRm4pckzQdC96AMiJBxNAg2WNpNC2LiLxDKqzF",
  "key19": "64gZj2go6MMiQgmo17gbfVz9mvE9UkDD4PoEwpqfB9tEzVUhURWfzCBk7ViUKMW9v985CGgyDauAqkWcFEkECy9c",
  "key20": "5MwLCh7FW8Tscav4UreWbdfgzakBgLqSugVyf7cyxKudXZpkWUjaZ1FfmwZSjEmichKy4oSTUjdmXSbZBJ1pxbrk",
  "key21": "3yHFcUiu52k5LQ7ixWqzh3gvn8w9Ky9S2JVfx5UE3s6Gfr5sjUDR6Q47nXXx8Z11qgcn9pMbX1ZoUousaYufoVMQ",
  "key22": "5XGe2hz2sh1RzKJ1JrdipiNAQB5yW8SmcsxtntL77wsD88dp3fSs22LxrJkHQ2F6ZSSGyeMTAkj8AfG55tKkkTzQ",
  "key23": "BWNpxTe1CoKXbduVNpQEYDi9xoBs8jddVTR62kQDDooWaV8cfMrfwkyeRKkK4KD18iTiwXY1cvmFdrcujDPX2fE",
  "key24": "4K7cbtuqduYzUcqejp11yrqoYZLQ37znSK5KYSSmdfnvsRiFX9e75NFoAU7ghJwJ69DrrGJHJRWvuBdj1u5AFUe3",
  "key25": "618j9d1wpyfZBhr2q5HKiaeRr9kFqE3D13BRefUsUnESsRqpYemZhGHXQEy5QnKTQ4vFaBkFgaergJBhQcrJeiRd",
  "key26": "4Hn1qbzaPoTQmrZAHmJ9zYWDCbCTSZhu58ToFkxNTShdxvPrj9fgTLTmNM6d3sryXGwbpw6Mcp8ruAeH4JejUmAs",
  "key27": "5BT2dDaYKEXV3AgzWQpZJ8nXUFyuqmEhM5Tt8WDFhnHLoTt7Kuc1irhsoVWCUUE4GrFp4uEpXFKPhJxLYpCFjuHA",
  "key28": "2prTCAXBJB8SXJJ8F2St9GZmTmijEgY96qXJpLWQ53NhP8B8bxQkWo1kdnPEczwac6Mtw5RXah7zcrrbM8tj1Tur",
  "key29": "4BHo15C5Fyb6yopQ2Kdtj12cVXM21sdFipNRH5QKU6qYg9Q4w26yJXU8zv8ZVoMv4oyLAPs2okzGY5nCcAyW3Pab",
  "key30": "39fQgwa34Y8HyDti9VVL37muULg8b8ZUbs4cR5zbi4Dvr32EDfRkQ5PT16svpqHHdqHoQpmHQQVsoU178ZSJXh75",
  "key31": "5vo25TeiANgAQkaQPTgXpenDdAM8W3piy9tfEVvB7iGY13n4yfiuTrM5w3y2tVkQhtmorRELNA9Tp7cDF5PM82KZ",
  "key32": "5Lp377GmPZm1xnRJd8mzMmBRUCnbeD1oXhzqFDwE4iSS75tbTrRjFA1gQ1q8YGzxRwmLUrW4enssGkAbW8KpjdHh",
  "key33": "3wRNptpdBqEM1TcJFAhawsrdjTM8WJHgmVCNaQRU2aSbjAV4S38Ecs6fZPdn5WFdqxSFqi5MkTrnzQWqckPd1Y2V",
  "key34": "5FCrF4Veeki5Sfei3krMy48a89PwYpCRKnt6bYoMDBbXkHRek7e12Ry8sGRnoEsRsyGUbSXFFkXivGM1jJ4DsyXb"
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
