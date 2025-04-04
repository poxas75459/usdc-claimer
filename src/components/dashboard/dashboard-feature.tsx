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
    "4Npv5cYYFxAAfG1EbdjUKo3qS7QE7ys4ix4iCwHZ6dgUMDsjLpJdpXCJ2iBFeBCTZQ7mi7YHctXZ9QqktA9qMHt5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "467VCZKEfEvZVWJZ8r4gsJgq1tiYN4DgAxwArdeE3DK4PriGJCvM9JeHKqFAjwQvqRaDofCpJw6BqmfvuuGLsFsQ",
  "key1": "1uAsQ9J65v4uViooMVh2T3dpdBsaPoBbaY7u2rDHTZ5MxiDHykK3hgwCbdhstzeNqjLiE6AobmWFVSnTSztfjTD",
  "key2": "23g9kueYSUekVAfbfqo6WLrBXZFhNME7TQcqgLJekKk2wJHyXfnNcmMDs5Z86fHc5zqhrKWLECBCzdxaQ2eJm6t3",
  "key3": "2mGJNLinwyhV2KXLBp1Pkzf1LNSZ7yJqKpHzSFHzwyxKja6xQ9iVcA9eQBKdtd2KjAKrt4oCRQr6HrLHm7kjmNaA",
  "key4": "mFdVE9JzhJVNUmmZrt6B24Ep7EQzDCXNiVBt28CbUPb9yjnvTZAHjJid2fsZPx5Es9FXBMc74rjxHwGczzmbvWw",
  "key5": "3KSvazxn5oecwMvFdXEwooSTZ7jGkqMVrpXwdojRhDGS2L55QYggJEhSkKn8UKgPYm5oe4WTdYCdxrzqk3P8PurJ",
  "key6": "48JQHTaYXf6sBZL6W3ivKAv6qgy2r62CTALQWpWMN417bhtc2AqhCqdPBSW5Me9J39C8cg8fmDXiPzX97UGxUG3Y",
  "key7": "3KXtyaogZUgwBMdQx3kD6z3XDCZ535qKdd2FuM4CXXcN1ewshSHu2nc8ogFTrBRhvJhjw52iD8WGPrbjwSctu4m7",
  "key8": "4Uidz2AjYUFXkEAsU3ajnp5tsnZy9bBF85QNSLEJqtV3CApRb6drqsRjn5VGNGP7uEJqyBD9cf2q8U2iJ4CSqjNt",
  "key9": "4y78bC7CYkPNj7qDjvwn5yZx86vSMJmDc8rvNvCj6dsbyZCsRDcwSGWL2gtPWTnKkHgBw9UUcbcwB1ciEXU5poGN",
  "key10": "3b8U3sygZKkGqWtzLFwWRHUte42XKJ9yomNDyWq9hSmCcehCfGy75BF8uEU5wa1RW2t6q4Cbkedm3N29fgzRs4UZ",
  "key11": "2uAymAKnKHaT8RrCcup3Ks2Vct3y97tQJSP2HpJVvpQGsSkMAzw7Lwy8z3xrvZHisJYHj9ZcEWYQJnQCsLuDbvBP",
  "key12": "2MFuR2qcf6hriAPznn1LkbehFMgFJ1CeJpZ1ucy1bFK6HXiyZNZnw9vvUYr9s7U5zH2tWhyoV924bP8qHqxRUFMw",
  "key13": "3HPDzdmJ5cR51RZjeHNoLePfnNjN3hsPz3gK3cWoUBskS7sJ6v3anrSFZU95kKNef5KwexZirmuWAywbpNE895EF",
  "key14": "Vz2Uu9rJRBgpR8NHs9ToSeJssasKgzaivVcVPRTdKmgX73soLk4Y6MkMoRCxi1u8bc8jGQWmKyTokk7oMTBTB2W",
  "key15": "56FrbXSPzgZ8XfwrRLmKsuetTebUmoMcqHoFTz9GkoqhjWhiucHHRQBvwA24sHFVZDaatWzLENCpoXgeoDm37HyZ",
  "key16": "4vGXDVdzhaPXYQyZw5beARiZ4MNdrxvxwVqwNQENjCsbNHnm1cEVJCitNG7MAQbSgFLehys7V21dCyaxLwx615BE",
  "key17": "3UiQVVfCchmG2kqg53e5Zav8cPap5n5pbugoUHpNQMakgMCxMMnUkDp17QjdrZVBHemWzpigXFTBv8MTXenMtx1G",
  "key18": "2aoSPKjXP16i8JLWyMhbRVjqLwgQyu4HSbJrKJ4Cu1CFKd2MiFdNkxSujgXQMHmKe64nwbKsPCQmiNpnzxNdomDf",
  "key19": "5akNFQA4gTcPpUyPHXPg3ZLuhiW57L7FicWpbAqEfrHaRSyFhwaxaFJxJgFmmCxujuy2uogdKiFHM2rk4rygTxRn",
  "key20": "4vyRVpPrPSRuFzdHUqgAvHjR8pVJPpm4tFtyxFzyupHWzdJTR7DGZ1nAFaZ4J1vcjnjqYBimiHasQCvE55Qbzxd9",
  "key21": "4ajk7eZJ4MHX47mpDw6BP6ZWpnKb9PRpkbFME3yhChSzKjJ21qa6bDMRNDrb44JnEcPXdDEMghk1hhwieiUQNTgh",
  "key22": "3udXTLaPnEzMh4TBubaN9JmXHJZrXrNfVWNVjY81LZuX2gzGG7R99ytF6SwEwZadLtGayjZSf4uPtZYNdtCrrdWG",
  "key23": "44CTZ2Mrga6sjf96inaE3TEZK4fMn1qJo9gZdTbQyxVwLNuJvsDzUj5cSPUtS94ySCDuL3E44z37ELdSg8Zo2yG8",
  "key24": "346UiQ8qUDY7SHXjrL17epttqf1jqbHpBqfV7aemTZ4orHdb2SEf6wMLJgkKhyC5hggUXHqREz6AfU7c99JJAQKU",
  "key25": "NEyxYVegpfaN1Xnvshh8ucTUWKGFPtZXWYwCSPMShoVFTAmriut3jRLvCoVwwA2i6ZMayw1tCPNxTYF2e38oWfN",
  "key26": "594yCRUKY86fcXLFRH4umpQ3txuaD71mWdTy6GkFo5Msfa31Vogz38jNq5JCDEu5DcNC7M7WJyTL9B7ciS29EjFZ",
  "key27": "5mrVRzjYofG8ZUtfhBCvQtS69T1Np6QF112HnGCDmw1VJzEuDh1khEyubsdsajTNu1TnAgP6iX19VvGKvMPnWMSU",
  "key28": "3L2mqR6GUFxi242hRttHwsNUectkaG7JzSgyEpzGhzu96151bWcDv4JVbaQ78D5eXw6eEkQsMB26ntQcNefdp5Jt",
  "key29": "5jQoYKF3A8HCLL3asEvqdV7H3TNT9C4UKcSzf3QitQNWejz2vtXB8npihBmoqSkL1X6dJKKvBsChm9dxb4zVx87A",
  "key30": "5RQq2nzna5vUp5QNoSheqQRiU3HUMjDyGuaHhaEWFxzzxSJjsvo2L21v6XztmnqeyjSdNhWckbXPMzjazUYE2j3Y",
  "key31": "VwBgBA3dcQJwBZuUuNwUQHTspnZidMnnugVfjUKGsSeEhm2j5hSxHoCPifDLZNFZ4VosjTLSSbXPYedp5aUnTCh",
  "key32": "5Vz4MH8VP5dfN3m9UHzJEd97ottacV6gzG6YgRYXfoyCyk2JEGejrABFFEVbpYq2QJQWAYpUcEX8xgF2vWJYdvqh",
  "key33": "2kgTJ9DzcTJY76UMPT2LrjPxy2sWHNgrAcHEBC3EfzzJLx3zUnj4S6MqtHpkZTuSCVVwWkyg5mbziRWSF9sXqBDu",
  "key34": "3SsZX3oQTACRwtC1eMjLWp3h1PdJsySxFymuTR3SSSTe8RhaWwCLcqUGRnrSqG9SfFgVnXph6Fjh4YySMk36Mcpr",
  "key35": "2TZy1HYDPC8kdVrV2uTPJC6ppn426qqdAu4or7MjdpZvtrXMVioPvPofiqXQanPPGsPt3rpJFidw2NjQkQwycpJt",
  "key36": "57x3xU3gGf7Mszg9GZzmGPviZ5eJ4yqJna4ErPqEV2QyTUY6JZzV1BoBRZutBsdx1ntW4KjEte8UAW28obfJYguj",
  "key37": "58QvzERJNpbe1XGtCwhyLJntGpnPUAS9qcRUFbRTFfRzWjXF7gEEmuoJeDwNPQ7a4Mvhz2ENptLdTtBc7SsjULhM",
  "key38": "soqacfS5XhSJuf4DuYJ9JZq7Va7vWjyQ54LzhXuoWHE2P4E3XCZsewV1gaxjUSCCkKCfLh6QTqs8GoWqL3MjwAi",
  "key39": "4mQBqkqpi1CkvdJaUuRrZBAVgkquPGqP1eXs8thbb1SrYNW7Aumbft13BScuWbT8vF1YiTzivDQYuq8sd5LeXsLR",
  "key40": "5qqsULQ7EeuccPRHYgKQgpBmb3VkFJKDmjJ5pMcsgLvFohWRKqQUUydXd4ZjNtAUZUTn4ZmAvoc8PY4zfcj1zsz1",
  "key41": "5qRFzjevnyqxxigH8vGF6KZDmZkZy9qE9Gsce462qCeMCqHahXBtu9whB5MarPBx4fjoGL2GJ9WYYMvboCg6HbFe",
  "key42": "5io9cUxXa6SrAGFKFjaYRit6WHH1Sp9YqJhVbbsKR3PYGwA2LCsEjzw5QCD3cidfvcbjYd4ZQtBwpJAuyCwcthnk",
  "key43": "MdEh3yyB183X4RtKngFXY4cVyJm1vWkFT5ZGPPwvn1uuGvV4nqmCkBucrnhNEVuj68nJomCWz3rHFyhHRB8yZxf",
  "key44": "3AWohNnjrm8CcBKVkGxgLdp64dyZXL928jWBpHUTc9rb3FsoiAV1SmAM5xDbyKe58M2vU3oyd5JWvvqqvHhjtayW",
  "key45": "nsxzRDgkLirV5n1CdEA7k8wDfWq4T2QoPf1wXXqmfpo7DJ6BQLA9tDtq53siCSPENUd2K6pbGxPATkrcQRiZH5f",
  "key46": "5UrrMB1M8MH6aLsQjYLRWRdnkXhGMBUKHQSsgLTxUYao9aCpCSkpnUkRrprZdemznRrCyQ1s4jxP7QMfFr6NbGXd",
  "key47": "3vKjrypVARnKdsrKwz8KWEUZeFtTev3rVatAouGmexou1pwrd5KHvu6aLUvSZVZWSzx39XLpmTNQGpRgqwnfADYm",
  "key48": "4Zm2FcMf9NZaSh5ctSAYXzjiAkrhtDbfn9GZdvShhWGraeouff8GTqkLNYZDDKFqRUpGBS6GUJKpSrT7meAKHfEK"
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
