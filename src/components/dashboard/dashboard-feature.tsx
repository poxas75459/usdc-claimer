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
    "3aCgK6vFeDdkXmoYPkQ5PM7jj4XcoivTg3RAzeZeKZ85VVzke1Pj1hKimNTc8dDNMXSa2cPabNvwJ3ze6P749vAi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47t2prHVVj3cSLPaKnAugY5C5Uo4HY185Zrgk8xTNEfQ44TJuNkyyBECumengJAFVV7jyZza2WEVvBqndPPU27Vt",
  "key1": "2WT3qJqCXj4itXmPx8yu7bwoKGNDid2RN5Az8hpD8sBUik1hefFuDCJcZVdEVcaCSNeN694q6FjWXyTCthNRfQYF",
  "key2": "5cddiSYzgq5kzZArRfkYeoLoZ4skybUMfBkCfRyMC8pjFeTiSTatG23DJQWpsvfQGazQDBgCxLFMeRdz67rvJNyd",
  "key3": "4LJKkpHy3mCNE1AQtc3ZoCzXjvHB6P1xkUWvLUFnYQJerqY3CcFPZw8mhHSEibY6JTbkrAnCyr1CapZYJWGvNbTL",
  "key4": "5VyLRzEdotQRZgK5Tx9uyYmYMyvwrAvSzfQtY2yfYbqABr7u9zrTRj38CZakciPaWxi6APN8XzihjMFk57eXqZ9r",
  "key5": "2mB73r2APHkczCLj4gC4dt4YKCEJHJgGzbuLvoLEjDiuCLrWHS4iUtwcL3VGARfan2kGYytJb3BxHThjDresJXiL",
  "key6": "4oeAvoPiwBMkn4Dd9AN6YhvoxJHGGdaFJRTKnHLhWTP6MgM8KHWfqjJZkb6PSTihDnLhTgdcPSjWxLRrMXEnXUMo",
  "key7": "45v2BLD8YYJevrg4saBfDBPKcA9ZrmrGPABoK9rngNKpyHZTHR5kbUBw7nyC1X4r1SRqSVovg6PoUeEjg5vXqKHb",
  "key8": "3Rn9wi566QsFFoGZ5UGES3pNGzr4PmWCvVcKVSeS5MCfdXuAsJzN2BWR9RdafEykrCmDGLGL6XdE2MpVJQCp1Cy4",
  "key9": "3B1xmwnvUTwN7LFCcyGEbm2uqwoJU39fVF5Umf791XTPCR7DMFAwyjpybyGiDKmpk2PnytQDtHi5ERX6P8VxY1wm",
  "key10": "2NHxqRX5F2HyLvc6YLxQtSpz7yiHTgLFNyV3CLDKSGXQjFgSsX37teU8GPik94QQnRNjvTyftM5MyDAwv36u8vGY",
  "key11": "5mf1uZ4YCCzbpMzWTv4k2Dg6cW95z6hDuHehnTpeqvcMHRgBizNU5wKZC2eaBqtbn2qmkvsqNopDMFmS5ivLh6DC",
  "key12": "2vKTJ69FiXDUQgAS2yKxkdFDLTNvH46EMK1dPVM78EvnnVuvNajnUL9B5VmGepzKnwwVaqdXphqgSyjho2wuYhtw",
  "key13": "4S9WwxjgQwWRtCADSaTvjSVCJ7J7SmRrFioKfccCyT1TkxQdpx8vjakuRntgwY6DgVhrB3V7BvYUseQfz2VDNh25",
  "key14": "3J2Pv6Ncfhcb4bYiX9P7VsXwez9FiosQEr5iJ8fAK2DjAg7QK1vpjAJGhpHH8HWdRvVzFPdgdbyPGmv3dbANz4cd",
  "key15": "4BYFNvKmTUhEkSp1tSpfp5TsgDhXRgSKoKDA9yXbSbHCTWiCcAe9J6Y4FD4ccDqgo4Cy5YbE7DPgo9qLSdH3ggQk",
  "key16": "5hymPLT8uPeZdMMV33dNCmniQAdpFuQnkMyQvcYtFEKqZJo3NsB9Qyh85wb1gEaxYH9kgQ175g2BJdE8ATftNrzb",
  "key17": "Bj9atEGGUQ3pH78xdyZMPcWvSWGfCKNM7GF3deooumCcfvSJTxLTFE65icaNnFmmgtd3ea36EvvxvsMDjWpGFD1",
  "key18": "5mVPRN6J3sACk2y99KyJjHiiH39a5UpcCPWdTaSg9myh6gj76Jv96fKYeYvssfqHgaA6n9iCYCprEExyajQ39uZq",
  "key19": "3L7bhRBhY4ufmAYgi5vxKN63cfEzTs3DZjQjgAtuU1zTpTc4a4Xa5AZD7JdDfGwGGpFBGZNArjoAgCNj1mEPLnPV",
  "key20": "3BZbvAPrSrP1eSdQeuotuc3YEqoZNbpExGQKLsDsobY3AYo8pkUzj93FDzLyY7zn6rqYwvEaUCsQyLvC7pQAZLJZ",
  "key21": "MKxDEq9rgtXDzBM9t46kQfHKTST9GcqE8NGiM4KcvdXs6BhytNGWBCtVZ2aQ7XA5Zf8KZQGWsd1djYnCi6j4jsy",
  "key22": "4ECZwMqExGy8scRmS8angSyUK7DHctiAmkKDzTAjV1vMq4PpY8iRMMj9ce8TC9KFCxK5gqpRw4qQpS7FGKSXEAg4",
  "key23": "4c3wu44pTZa1HpxAdvPS7iB4iByziAkMXLX5o4upLZ7B1xYHpWWDZ1bAEDLa4gpHJJJ8DDCksyz6kPao2TdoHGJs",
  "key24": "3oebyXtknUNxhPFMBxvUhkqsSDewDDuWxbqxLddvugoAgTDpKu1dSDzawU2watwKUoto8E2okMHGxZU6cx1EMzLC",
  "key25": "36HGHrRs1hNjc5cGCjnNcLvoErJTjZP12LeP4nFBXTcXF1oHk8KuS7T1mCPRRMp4FgbFAucNCpF1WHNkHEibs19Z",
  "key26": "5qB9odzoxhzfXuAuFN455dY28HZBoT3k1W4UnmUSyiqN5fnxbGWc15rBrkfW4nLUa2QU5fYAiyztY4Mfw3NGF42y",
  "key27": "5QPqykZeVP6VbwBktebzRiCmnQfpWVmLPGedLQHHMwJavApyEUX7KKVTchBGcR6P8qp5uqSjjg4o9UmnFscpPrrA",
  "key28": "3L3iZa8N2T6G6zwQF5msNgQR2m48P1DZgTBM4BCDWQ8fM9GqEDDLTaWs9dqRwJW3v3hEfDx6L9JpnZFuaYCV7Ybq",
  "key29": "2vHqse3RcJaXVQb9vioHoHM3VL2fxBtYhKkasEEkfeTAC6uRCjGbk9QjNpUVQ45EhvLesE5PDJuLuJNR5eCS45xF",
  "key30": "45TniNPFdzvbMrGK1JzajaiEJEhKbydW5m3EXHn3NhJMYtKoiu7tQjz95hxzW4Ns2ZzfohruKA5C7GRWquyD9Uub",
  "key31": "65PCYbkkrjTCj3LMPNQSWiFzBhKkJghthM8U7goDLbDy2uDQrso68W2gkxSE3yW9JUk5EHhLrD2SPH5tXC4owcT9",
  "key32": "3GeVmSu282cU7UdafpKj3DabPsywgQrtwJzeNR924oLVMsvvKd5YCD5Db1wRPsszNFTreLHs5f25GadbAUFkmvqE",
  "key33": "3SyuYob6X9zYDxwBvLbpRcexABeiKTRoJcgkHRSLnMjF1S1kQwmgLhEfXZ3EzmKBk47GTJjBJwHsjwwvcFAzWzQW",
  "key34": "FwFpB9bVa5iPhaBDDUPRRyqRUNJ5D5CuaGWYtnyw5K1Zo1HPYbEerd45AcxULvr9DT22ofXXK5UP4Z2G5Q6XZ2K",
  "key35": "3tPWDshtJQTGgrUSjqjFvayqCnY8oNrZFLHdt4aGHcEADCpq53fkraPc9msCkZHb15ZRTHJUCfjTQ4AG3GXKN4ZC",
  "key36": "2rpFnJiikgVcz73E1SoPcAU9JYyaaLxzCraSZYdo8vi2tHp2nYGno9Pm5KvdM94RV7SwvvkqBudw7YPXTwonvSSF",
  "key37": "evjNBZieyauwudurKR3vncMYQRwR8bxo3XX1bCmd8ox3bxpVXPn1cm2runCyb5vHHg7CbT8PgFQYXtjVQxgtBzW",
  "key38": "5bjQhfcBRuzkycJHf2ncan3p3nQ6dN1qjhFjcwRw1L5MWSVGxYp5PMiKhJxvJMPVczyioAsart3NdEVjvfthHNqZ",
  "key39": "3D7ksjYteDhD5SHyieHvpm1UnXovWvegwHcFbWenE2eoqsiZPGnbJbXteYLP3DMWobDr2HMdQqqfqqBxYGbk8cxz",
  "key40": "5oRGFTWyMSX7UF8akCwpb42V55rhPAw6uFeHnTHaqgJRhggpBuD8EF1EFrj4fH8mZCMjKypFeBu5La4wfD59Y21w",
  "key41": "5t76F7e9N7etRaQvNuZxspu6L4FoAB9f8kYeKWLmYdhtdm53obmR36r7KmrnUSZVGiPJuxDVxDM9ZURAfL3ymFSd",
  "key42": "5e2sKumcYX71yQMrJqhABTr5JMKyx5Rp6tx5kiS3xTNK86ZbG54G4MhEKM1Up63rXLjUbSfiFD5NwzsBiVgJhr6s",
  "key43": "66vjCTgm7nfyJuirQ8cZPnLVVVTHszyG4a1pPGVFfH5QSjwmuXEB5BnZRB4nwyj33e1jH2Rdt1z6kBiRpS3rFv58"
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
