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
    "42curGksYbbE3kpYUM4Do4QwDm6MmVpHvojLEbkMehxJuSPurtqd6a6Tw2JzPkUtXbM2Hz3Vh35Btv5YkXeY3w13"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wUGudMBAXkw24XJv2HFL3cFoDvjARKL4Qay5coTpo9FoaVzDuZR6WnjJzreRPnU5YjYa5GjJ3piPCcqJkA4gXZ4",
  "key1": "5Tny9pToP5rG2VZqdPoM9Rb5QrHptbyMSnJ85yjSBt5uasWAQkNxKFKEkcBMi4Ypk5eRbrhYifDt5WGKjJWMM2d9",
  "key2": "3TPqyK7CorKDTcSJtYQ1wMANWsJE4AaAr6ppwG6vqhGYach8bi6cegwJ6DMVQjeKFVXtqN6tgpq1bmmMkG3P51Ka",
  "key3": "2jWSbyRaS1XNkuunQEySs1r8wVvNXBpdLxtcxxrcCnc7oY6dhHDu19Zj7nw9oSyRYVXBhTG9pgATdypRqsfDqrvW",
  "key4": "3vqoZ43XVWBoxi34zQUTM5c3SKnHDTmWmYB9tTenty2sizsKzX6b5C9VhQy5aT8vQtY7bsWRPG4JqLvpb3GDT6rD",
  "key5": "5TZv3xB3VGuD1cN5udv3aKEsSWaEStmP4785BU4XPynfDD1AR3fJDatcqxhWKNhSKamjatHDLhBvRCMCbQ6X3z7Z",
  "key6": "3vmuTBcvLifBdD6c7iYLZRwH4YaGDetuDeCTFmermGGEME9e6M6wjZ6E9K5x2V1QF7XgptxtW9wEm2iFN1Z7KZjH",
  "key7": "5RYU7AxzSAW1WZmGwFsAWbD9QEBmjKgAUXmh82jx7tTWkqUHb4kXknFhuMLoEvh27Sstg9wCbFtYFEkvkXHDVepn",
  "key8": "bF4LgR4Mreb5QZA3Z1oFtbCC8DVxxkgPiRLrLg9pWqwe62afjQBgJTamwG2F3SJFnnwTPiPQoUcFUkXRbikWMtp",
  "key9": "2LW7hkt1kNvz2amdDRggyrchb4cG5aDucyByMCoPDxYL3DrRBUthrnUd46VtfARQTvgJSMKYi2kaVrWKdF8oPNYz",
  "key10": "b4uJoutr44tbdRjaJbQsM2MaDPCsKa2mpY3YcJzGa8K53suXwcEZKd4n1khaCAoi7mugsMeK4BrovR8nFvwrF6v",
  "key11": "8343queu55GFMJt1nV823cg1t2pu8GHWv9scEStB2xMnKFyddKc5eiedbpXchpu9hntYPp72Zg8guB3PP8rWCZs",
  "key12": "3so2z2xmvsxwAenoiejZWPHvBcaTbe1eKoFgL1MY9xQzo7fRipSu5PV33M1A8yMZpf9FD25WjAK6HR4wGwvuLN3t",
  "key13": "4YZDsZ68NAf4Y44JYkRND3GY8abkMwJ4ZwhbHMZmA1tErvSiebM7ifvkD3hEqPLCfpkByQN4Vfnqq98R7JJMGKoN",
  "key14": "KRh9yPBaKsF8nkLreRHekbqKpgb5sPXzEwr1U85mdjXFMUbnXwxhzerUrYm16m6rFMaLUvoGqVpNcyF8RjMFX3m",
  "key15": "5E1F8MQgXSUcJskxSYfP4nSZBaV59zTziUL1gBJcMHHzBHz8jwgqLAprpwvn1ht1T6kD3zARkvPFcw9Rru951X6K",
  "key16": "52GR74BiatChET96AYhjeAb5ywfR2beQB58uBNCcgW1Fz6BNCgDiaT6FwLvFWigCbhLPowK5zDJAL5HZcrrLcUBu",
  "key17": "4MKCUqkAFJHTpn86JWEMYTJgYK2KVzH5kxEipJDG7MDYUxfXTFZbMLFsdLkCbNMu66P91Uyek9Zp1AEV2UwA2KFk",
  "key18": "65XqM2xH5s1DjArtc6ZAcPAtA8KYm492KaLfN5b43CQsnBm7oTSgXEq9h1cYC1boNw3YeTVWov7T43QfRkJqnbxS",
  "key19": "3Py6KdzebzJvXATU5h2k3dyfXomHMRCPqf7F51WjERu713qa8fAcp8goHuoz9q7weeTAW7rYRzC6GS5S4fHscdxt",
  "key20": "5rw1bar8kNyUDLMQoPne3xdfWWXcvHKtST4DNWPLALteN5y5ChRnuZQ5bnaPbZMPntHUsYn6dQEG13rENBTUFCJF",
  "key21": "3LatTt58f11aZxYhMqDgiSMBTAqYYeVapAsx1isuAZtpoEgdVfRxTRCzUvhWjRQBbEoLJxcMmVoJfZisi4mjcyB5",
  "key22": "v2UcwyUPTrd7Cy6zS84vWqbykzuFkMSTLbrdWc4RY6RCirKCjdahMg2S19wAzfR3arEVttVsWWqfjKnzwGn8C1Z",
  "key23": "2NrmVBFG72fmQrwBUNScFaeZWTkopAKFfjK1tbcV6QBY8smeTTZ1DZA1w4b5dXnGnM5dxrnqZnD3q7Yk8FLiXPDZ",
  "key24": "5368VtqP98pJWm4uohkMrPqW2uuxUpjvdiS8zt4KLNiY3Nq4S2Kn2AVqY9RMfNN8f5TWTTXH4cSBLkM4xDGUMJje",
  "key25": "5HtLHn2afDMsTwYyaVLN8FZVCemykoeY67xx8g9B8f1kZ6AFG17WtfJgsNUm6JYtNn1nSG7deFRWGwLur3SeykQ8",
  "key26": "eCuWd7nLns2vCx1hCSGP4ugPVW1LAP2oafQah2idFW1KNn9wcZjooaTjxY3zLnDNsAsRbdUnbCNAcNo8nWA5WWR",
  "key27": "3ecgguNE1uh2bk4pJRfTn8u7jdSpxfBPVpKty59RH8SnmFr7iVntGTYHNzx8xgiAdwYa2MSjCKkBzmZY3iLsrJ6v",
  "key28": "4mRgTeW2K35Cr3Q3LffwGwTZdiJ5dcgAVWCntcXWEsqQsfz4KRgPMRJWiZWfZF5MJNs945LR9VkESDGPM3LPQkTP",
  "key29": "5YeqVtn33NyPxY6g47R9WrHKTkq346fj1UiJ2jy7SqLkaGCBwfmDiTVVULFHn5Unb4eDxcxpHmDzhocNoiDKei4z",
  "key30": "5H8Cr1giaLAityph53ayZkRs6PvbXV2tthsHWWpJmciCiBYFr1c2nMXNgqwcQVq6YW3wCUReAeCG3i2Ej8zv6fLe",
  "key31": "3JH1PL4nMUt6jCYGtjFMR4NXsCBqUicuDFZ4Yhte7uPfmsUeVKyDCdqnTa5WXLS9Yc9RrEowJWd2u8h9BZ6fJMBE",
  "key32": "1fUM1bWT6JojRk2rbyFSYSt3E8NhirWjCkKvbgRvdxccyg4Z3ezP7RD277XH1SxfcnYES771QeUQhWSorpgYzPQ"
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
