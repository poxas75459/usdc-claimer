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
    "5kSm7pyk4hjdgQTZLzfcN68oWbfLQfkhGNKVucf6Q3EFCnTdcd9egqownzdrF8uVnk86HsuTaJYjjUU6xPXCYAt8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "85uNX52i14n7rVZDkgH4zXiyTZrE2i7sZmSNcreifktM6dN3idwV2ebaLfzz8ohiUPoyXjdYoBNQdGQpJosKsZK",
  "key1": "4unJU2yibHe6kEYpSq3XPATQViLv4xKWLLMZFDwyLHWheJMo6z3imdijCtc9xdyxNyLg65S3BTmx1v6j2sBibzVV",
  "key2": "3SgLvpmU74UY2mFFU5Hq4JX7QBQi1GfoDJnfrvhr9mY2mP5bcBbrT2KRDWAFQyk8NM4xLSvY9qQGkugizcRN3Www",
  "key3": "5b7YvdnQRZnyxEYEpU4L3n9bUhHd77zm9W8jnddNJcBq7uUSDJeqgWzNo1vPyWJykNhTcr3ojbK6qFE59F6VWUwt",
  "key4": "Ty4f9igGrpmWapP8VKRT5Bhvm4RcEEutBMC2MiXhiPQ1BMitMaU2kjNXx7pTAgzVzuD8zAFM4Ya4VSXKzVGsaqJ",
  "key5": "2xagDWvaKg9gbmYWXh1YjeMZLJmET5HZyJYEu26N2nuR34AwRW7LerNDhxvkW6TfmJYtbJeRdP3rftFwHbMDeFBD",
  "key6": "3iZWMx96Pt6M5U211qSomca44MHYCkUJqu9QoHkAs3dFx6fWWpBfXmns9ppfs9vHUivtUU6FwYWb8th1U8CZRMTJ",
  "key7": "2n1Jw77HKeJkinB7hY4GPgmhBX7j1ZNdYfAzc6SWD3bo8CDmeo6y5VxBZEpEP96LeztSP5tCDCCJoCWLKVyh5pLa",
  "key8": "ZRdMYg2HbxdSSmTP9BT9BbL38uWAeHFgrUUsrbvmgDx7dxV9yh9Nawfwp3uT37WwSDXzo35BjgJrajBMytZGrCS",
  "key9": "4Hc4uW9dkhJrbYUAppXhCvF38xcQo8JSyc57Vh2vtCiZHJGgtoPCxeW9RqLCpAicvsy9PQZfsXuHa1Noe9wxXKnW",
  "key10": "pBkf94udLTateJNxCPdhNfbWMjcmo7Hfc16jjZDQ5NzbNjrxjrDaDRYTNHomoEWFkAPdZpShD7Vd8AKK4FRJ8Pa",
  "key11": "kNeVJgpB4CEKuSykvca1Ba6jX2WQFsRBgjyPaUdWNAaENYLKqVpzRG9nVMTgeQETXdX3bu7VxMgv6BDG6ytTrva",
  "key12": "4HV5Lu7CLmeUdVV1dsP95vtBUFjb3hspgahBu1agMuAu1n6EKiffyaBR5EgfUKtbuVod6RxAFSRSvZURjTiid2EJ",
  "key13": "5uEvAN28JVwAxQTNkpkiAomFd3yDy7qdbHrmnG8Y7bdxdNgdsnxHLTMPnPQMJV1QivgE8zhvJxT55GSTBAEXCDxZ",
  "key14": "7wDNuV5uAzrSJmc6ZTGYoCuLqZZPZrb6skQwRCTx5cGAYpM2vdXLrbbXPDkrn9c3obgCdCf5GHgeWi2VpRfHqC1",
  "key15": "63PS585um3oAhmQYZu8LXE4aXk2UUpRnGqzDgkrRaEAXFkmRNGG4hSfUT7SC5GBBY9TVG4cH6TFas2fB5SUY7rKe",
  "key16": "2TSpYFYKvGHnit6JGBUSArPr6Wzzy5ebYbioY9fdjoG4F16PmZfo3cahCpqE5HBTNHxdqn9Xnd6BVEUBvDfuNofL",
  "key17": "61kJ6MqALHDBw6fu5dkDQtKUXTJgadztc2m5oTvTvKsfat2qG4rs6od5jb5arkajr86r1fdX1DafUqkgX1yYqefK",
  "key18": "5xQcQeoqLxZy1ttfKa8VHMW6UeByiWdiCzhEuEJYQ3F8qWTy2scQiM883CRtiyKiLHepnWzVfFSUziiD8xf4f4ut",
  "key19": "4rGuME6ti2MXGBQbbTnirNnX7TDofTikzsGQyE5Pp8qTRPQWYXYQ8cSeK3ig8r9akC3cZqjckcpagDxgR63EvSpL",
  "key20": "2bvqgqPzpFkA9wpdUH8pPHXzigfv8AnmXsKZLYHS4mkyDQAsWpwh3NKPV6cAYJJwVpG2rzmw3q3fYQNDXsszbV74",
  "key21": "4otKU2Huh5uqF2tSjVZ4msoiZ8UVPA8JmXNUtS2S1mZz7Bf1Be4DMH7MfNzKGUNibgCceY6ZSZ1uTepxfVRtnDYq",
  "key22": "mPGjE9vVe1uvswGamuMTGQFEujLrJSaiyVpbEBZWbqE3KMyT7YHQv9UiiBLoF9jFJJX3Vmm61M4VeBcCNLgkkoc",
  "key23": "31VGQ12U24kPY2MpqQtwHvoBmZxSTTi8gq2r3pPWopaDDRsz4mBzL74B7pcWgDM84NTf9f5aWwuiZjfqjcyyPStn",
  "key24": "4nxQnr5xs41Ti9WgdGN1j5JDUQ1vRujiyP49UegpdoomzKNHLUqxiB7myBGoF6pueiRtzYXo9DY5m1qc7Tf132vL",
  "key25": "3jsmaG9HJSKnDTRdXrpJKVJWwgXopsSFNz1kvRH2CiCkYuYDF5dfDiHw9P459zMnjqPyW9iBV6uKiXMPogQp4nB9",
  "key26": "2ZcC7qeH35X5sYQ2jmPHJrw7SAGWuPa3JdCZPZAeDzrs6UfzQPt9WzvdEzysqCVpbAo9eVF4Nq9Wm1cm5SHLfKyB"
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
