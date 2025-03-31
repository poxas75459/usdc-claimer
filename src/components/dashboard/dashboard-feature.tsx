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
    "2JHyakSQ7ttHKjo8jtuoG9AuM29Z58xbtYDW34cdPNHoDDVp7RvXwV1kBNqfNpHpC1tSvAs84Kt9HqypENPteUHT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UtwBhXS5eNisTdj77qppkoPNhghv1yaVP5ZT6ErtkdtrutGE6ZXj6DNpxuxKZbakVxUPV56rKqZby68z4HoPEpu",
  "key1": "3PJagTntQFMAK7TuLupxadPGaEpsgvWftBzKfGdY24vbfkP4XoZZF867Ckc41ywiqEWGFrXpPJxWwiWEf6L7T2E4",
  "key2": "4XuQyTfTFcTmCPW1Aqu2r843WTe13jXz5Et6zmFLta9nnGAQ36oZtsqAf29hKTeou19KUqFkAvLJaNKEZnGzXkJy",
  "key3": "3XuwAJ2S75ptfhKdNGs2uf3ofS9U2GN8romAvdBCzR7ZRtDvrA2sJUcdCbBGDgsFZXJfiRRgN12Vo8hfcVtQiGDE",
  "key4": "4iUknRnupCjggdtu9q9nuasbGP1HgYXiAvvWah1x4kXg22Wbj4nFsziBYpiPpd8mhWggJTxav7zhAYF1xYzW6nZt",
  "key5": "5MnbteUFb5mDiK8o4bj3P6WHMxaJAT3J7YzzkURBgHh9iCP4pBjVRfFRxpg5YL7hWmFrfmFeNqqZVQV8351Tq83D",
  "key6": "5UZWepWwjjWkbozyEMZHK1MnACHPsv95Z8icjoAUtAHQRtk7DyF6rwfKqF9PJWFPZb82akACBZuny6Rc5wBv9gyH",
  "key7": "4sgpDxGi5sK9rZ6rfvFtz1NfeFcSvdXg5Rumd1dA1DTkhKY3f3Bh4YqL1YnV4tU3i2rejYniVWce1uj4nc6Xe2kv",
  "key8": "5VMSAgM1gnqdshWQhkyzyR1Qt4c3BpgAPc3D4spxRUTn141oG5RSVwx3TRenQ379LF4ZUj4qzJ69hSnF1T6bPvmc",
  "key9": "4cr6AMoMXhqaSVVq1RSgwtkijQnywfbUVudCXYcHVYUYVWQUNNekpovFv2tWjhM9NhKWL9TsuXRBs8BeikBKwYiU",
  "key10": "4K3WZE1VNVqwd3pMabc7hJUSoVGDgrHbU9HccMKHDYf5j63Fiygqc3h38ZBzyRhiS5koTaHpvVP566Tr62J49u2W",
  "key11": "3y94axxTfbzdKqqWUKDHGuwT8cifg5y7KLwG5MW6TYm4m6M26Px2BdZDBVCB5GkhvEbukjTSW1Mj5qa4ZMwJLwew",
  "key12": "611aqaGrPL5yG1W924GiRjjvZegBDqB2ZCPZzgkv5bqn31G5TvAbYHd8egWdRso5SnxKVWSf4RGbTWuoavXp8ZFQ",
  "key13": "5rJHBpuhLya6Wyh5e9uSaEA4qvjki9S2sHjdj4S9YJ8xyFRmDFWR3hDE4zvXEWcDmKfZj9YD9dFSDgByGeyuJJPn",
  "key14": "4jagY4QWWPoPQY6Ain32ykpD2f9x3XWZGB8fQFQRgLTRx9yTfPCBRi1C3UffjLT69JZ92qnxsWUmH1Mdr4VVSPXy",
  "key15": "5BesrqHT3GWxEhgQMdKRrd3Wt86yciqYzTxA7wtyPQ75BYRXB5kbur4T5yU2VmT5k3GxoHJiPpW8R939DdHMBiug",
  "key16": "3UUYTFkxSCGavGG6JfGkgdc6kgmM94A5nP61jfUdimtfRQHwKC6EwGEZMiBGhg6tMD13ucHtJGiaLpNBNhoQtn1t",
  "key17": "2xw6rN9rYPFp1a7eYwhiwuZuHXKnYvjnqSJr97r8ymcBg5Vkgf9U3dBigzQzEWfBd6dgvYFa3otZQ5xugDBu98nt",
  "key18": "2Mn3pNZBhvxWq2gZmMXB6QnZvdZ6YuHYudumKEpeEJFL675kmbobxJ8SS85eoGcR7xvGnMCriu2sQottGveBRj8D",
  "key19": "2BWjRUusAhTAPpNsu3vyyiubDgscgzYHEVqQaM7zbfjT3KtYpcWnJ6qfGNu4nCYicGT4WPQBNeBkyPxBnwPUrrh6",
  "key20": "JEH99RbJzgiRguT1xUGLUrQNAT2R3zboCwcd2hFe7as8xE33rczTkVFKkpA9kpLWCZY6jNuiqeDpm7CcyABh7gk",
  "key21": "6UDAC1WKGttg2kJwL5GfUpKc6kbUEuRt8Vf6ydNokhS6gjLHHpwEiqyMxZ6d6ExvxTv7SQBTegrpSPHQjMBUJcs",
  "key22": "xdBT61TnGnDaYss9YZsyJAXLk9LfNCefbga8ZspY1ntScDwPSVcNBKwh7SdJa6KLsYSJVAeooe6f5FiiTj2249u",
  "key23": "iuHDe3ZczANc2dTmYeuKN3oJoQztZoarCqVVpkfD2e3Gw2cXgkwfZHUwAsse6WPVocazKSAKZd2w1FjcvsVNwcV",
  "key24": "2VT6HjhdgSNsuRpsMjiJZUP4XVF8dDQ4U4v9oWkxS64DMag6y6AfduLc9dsD4Nmv6y6nKNCbZNm8sbZt71UYsg1J",
  "key25": "3b7ig1mmHoQCzX9q6gqBNWWR3rLhoLLcT2DPfLaw7WjzrfemNk76H1z52JypXkWfne9poDrpENLXKgtcqiZizBqq",
  "key26": "EvwET2DtoFWEvAc4bbZcKsrG2UUhLfXMnCf5YdKscuPpoCT6YMSnU7xEe2MyS5VsrQ6ujqw8G5XffxkQhPUXbVP",
  "key27": "2F1XieaGw9iT1HjvWk9u4qnRtzbAz3FVfxEFPcgxHMLe5zxUnYqbJAi3p8bgVXMPTzMSaJeWAXSdbWdNimWDbK98",
  "key28": "4kXGHkBj4SQtmRvgYbHn6YMdAa9iiqdXNUfg3b4AeNMDTVwDNo3iWNmXezojwWVVp6ki3oEPc5dEEqyM661bwDjB",
  "key29": "vNo88n3B8UumSKgX9cTBvn9yhmY2HV18UYVaj4HVcT75U5LY7wzJ2Ai7bcNoCNA65sxJ3kMfsD2i3f9BpUXWhsN",
  "key30": "5j8LfqC2ewpHsSWiSoG8Aug3iecSixTtzK2FVejchvxiampcmbfiSdSUvwK3it2qDvKBvzAoNbmfGktCDX5Tjszw",
  "key31": "4qM3FCiTk9BnRhz9EYMrJgUehfnM7bKGn51TuW8R5xF3ZWxEU8rxGVgxCi9v1B7j6J2ASJUTFNL5rtJE4HfdH61a"
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
