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
    "5SVRDGAJcEQbNfeXGAtaowEDWC854HZmQTkVB9frb5tC5eXt9iEkx9kmaeRfYYUTa3CSFe2AthYWcZhpKURm6xh7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23MrdjcQhQkJqrhBPtRzkEywmSgCU7a95Bpm6RmVk6ar5dcXJJSgYqsKRdMCBLxSZnvLvKe747pPSXPxLdYRJVYn",
  "key1": "3r17j7VzeA1DjZeukurPvmh7Aff6icGch64fHEqkCYSwNa45rvQjHXTvZw9sgbvDbKqQ1vhL5dA1n3NX76GieoWD",
  "key2": "54VqcB46SNn2qHtnUo2xtce9qhgbFuuH3E1WNpBchWKej4CEHpkZfvqYkGdHb1YS8TUcughF1YeZqSTMjPozG7iN",
  "key3": "4Pxbw3nC6TXsU92qhEAvbRU3PZHyqogu4AEEjNERjdTMPQ6i3z4vsbiyyJVyRSEQ5kZUJGYicnz2VvhyNQKBm7T5",
  "key4": "4eQaZ5oiput5jA7KkwkjadM2PSaCVmwRg5ip1h2nRSwJ7EVaDwokhVQpFXFit3pPLGVqnfhDf4jpwAUaZRk1wpx5",
  "key5": "MThBa5BC6774YWK2DoT5dkz85UAYxfgJhhPzqqAUcHZwEGaMYcKEHT7jrXhf1jP5ze3UUJzwbTYKschp1sHikG5",
  "key6": "tpJckEhngP6Efr8qQud2mKEwQX5MWo4fdWAoEE9rZVpS9h4ifS1Gh6TGvwUU6D6fAs1BLigcj38PKoQdtdDgXrA",
  "key7": "5bv7JZSy6waH5iD5y9TYZtpdNmGbEv9QgntcKKDjq6KDwJzhfB8zLYZUQmG9dNQYMJMnNPC7ZBnH8Uok9hsb6gGj",
  "key8": "4JqKQxyFnx1rJj84uqgf8h8n5aPQxzhGyXGHTRrtW8gsn7bsMFL5RznVEjdBMFHDPPpEdGg3weGmyE8GQ43UkL3Z",
  "key9": "yBxRjDn5PtTCCCYmJQryttG2oXZZpMAnWUeaf7fM4SrGnguEXKTQxQonJAsXVjuwcgoLYbwqTxfrAoYKxvVSBht",
  "key10": "4poAr8PpSzhDmwsRJ4kNXBZxyMzY1tugzSuhe5VvSUCmoJNt6MY4bu83ZFHsZtriTA4i1Fj8C5ZyzhboPUiJiv6w",
  "key11": "epWxVzEZVWRu8ZxoZfifbYJB2PZ1u2CePAz75NBGPKB14AkoAQytnHdSnAsMa1XebCbeUYjN9VzyUiKAk2EevfZ",
  "key12": "21E4ERkyfzsyeSkUSG9X4FTKh17gpkuLGg2ztSkm4waxrbSqAhR1NDkrfRwrQat9teQBGDXpC3NKhkb37NKozWnu",
  "key13": "49TzHQjrvbdTjU3PUtqm8XoXa9MFFuokTsf5DhX77x1AucdKngLN1yFLUxXWsgjSzqS8ktgaVcQ6X1A8eQupS4mK",
  "key14": "2dXWfsNGhYQdB81ajwgdDwqhb4kJM9njwpXHYnKxrUN7tbhJJoFVxXtnShPTpQnNKPmS898vfWhGDBK753gTnYGQ",
  "key15": "4u2aMQswUywjEdp6MfrK3UTTG2CqE3FBkYHDJgRpePvRf2zt4ZoyDav7kTH9Towb7Ve46R57jdMXZFyhhLUeFFoG",
  "key16": "TmXaBRQbw5js5jdtuiB6rWpoxGZ7QMdxm3PYG88PL8BDXHaehAxF2fCQ3m4LMSRidZmpU611bBNDeT61UFzYhq6",
  "key17": "3UiM2Ly4nE7gbhg3U15Bn1AQELqYgx7EmxdwcZ91J6rJeMYTGxTdHATSVv415uUAdpFujBtTagYMTpoU32piTa5R",
  "key18": "3LtNnX44JBRap8BxUFxGG98hCUk21eqyv8T2kqtfbdr9FHySoKXhkyPyE3RMfx2JRgsHNBXHM7HvjWyvre45Rswo",
  "key19": "3KG7PedDcGLDnTQXVQbGbzzcM4P1rLK3ZEzvFHdrEaTdEYPPDMFR6KfiRBKm5oDSuAkHDpc9CE8FtAWZragoNpJB",
  "key20": "3gyHmzypMMXmNTePYk4cAkCUkCGJtzCBEj8YieGMjp91AWrRoha54K7czotwZqeHyrpyV4iY62suSJUKiw98hrvo",
  "key21": "3Gs9iLMtfNe6GUywMYxzSA2o2WCP3UPDcZ47zyfrBQUfwGSeMLvLZ91EH53WaYcLouMvJadYXVWWPaPL1ntbma1r",
  "key22": "5rzsHrhp2YwxV8V5dtTwCT1CFxKBXzd58TQMTBa9e3fcu5M7Yq3TztuaM7yEqRjHtuTiTGWh7PayFyeh5WRrNK79",
  "key23": "2uWrSTRZMEW5kmqQn11CZRkZmCLwsi56sWiNjxGrfcjD2bgLiygwF72t6WvDDQmiLkHN82QEZ4WxpnSEM5zUzNMp",
  "key24": "5PjbpczdkPdUjje46tyvfHKPftYetcbQYmVAsRC7bqSmjq2rd7cuYWKqYX64PeZfePH2D4k7f2e1cjYY6JPiyfzU",
  "key25": "3CpjpcqMbbkUXDGAehtwvzBk3Q6ve6Y9L3BdQM6dtkHiGWNUixep54iSBrwxzrnGkrGbpULqWnNr6nxo73Vpewwt",
  "key26": "M2aa5Eg87Deg65vGzjN5oseLJ4Lu7w6g2bcx3cxuLbDPmtx63wqSRWvRqVJxRFdeCx4oQ5d7aqa68QmznnBmLQ9",
  "key27": "3wFJw2HCPHrXK9bt94MtJQntXaxmbtFMFJtLhL7i2SYtz18uUhiuWQBxjWiWNWTLSBG2U4uEVhtp8qxAhfVBXDqA",
  "key28": "fBjQUNxeh1yVx6b4HFgZJxvn97cLnB7UpJy9NAPbwRvpSkjdgiu5AZf1cmNHqrLPUmHrEacJ3JXYtQvHcbReYL2",
  "key29": "3etRPYaLLVhXArAKrtQ3gduf8Wbyv4DWF96d2b4ZpCHFx8aCnDkfQtxTE2UX9GA5BrEFBPmSrX2hHCSQz6gs82Wm"
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
