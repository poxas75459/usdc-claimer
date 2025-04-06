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
    "5knaeEFQJPssHP87cdKVL8PDifHiXeEBDQv3JefyMNYg5nxDWVFU6XRzudKYg61V9tccaZ4qNtNg4ou59Kyt7mnC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rzCeZR1LjdPKdwVuRGqt5kN5bQa5SGCTY1vTrVxJoKJ4CkDhmKT9uPdFtnhQD5TBzfaWzdd1fDjoqVYrPueBMM9",
  "key1": "3BnfAgLfvtMUukPPv3TtVRjyo72dDYpYiU3Rnph1KqFiqyieYnibGFycJu6Emjgq1YjHWu2uC43SZiXGayKgcn9B",
  "key2": "615UD1Kdgy26o3B7oHLmGztrqPFwSoicKQXPq6SMPRcuy13aTPW9N8giivyatSyMUFbwnEQKfnmxMzL6XsvNNBJN",
  "key3": "2PVvvWT6ub1ASFXk75krCAXQy6bEieCwtJ4pVgYTBxcHCG6R1siy5892wQyhQt66uKg5vn7MeveHGaFpVBixfuKG",
  "key4": "5G43CfPk8UbggwZ2pjcX6PuDHZm3n56QoLwW3HZuQwpHbzp83WX2XpcRRQkJRh7x6oRC262gDJcbupXYkf8471ra",
  "key5": "5b6R599zkyDgXDmJXfsNLFwebcskBJn8WRxQt9vBbXV3X3BYN457szeKnT8bV929wv4SY3qf4aAjLqKT1uwmBA3h",
  "key6": "4Am26MFnGhcxMwxVb1d4DdfdetWwmsDPa8ixTPvmGjdwSfPLR7BL3rshPm6YrpA9g3gB1zFGoA2K8Gu57JgmWJ6m",
  "key7": "2U1G9go93kk8JRcUTyEtT4uoU7xR73qWWypL8tRv9css34QcdSGmyVqCDYEw6T9uWT9gqbqKmjdjRrTMMAfBiwye",
  "key8": "62hcuwjbzvRkDjmkufT8NbuzvVP7gUHQHzU5XDc4mDPXpxAaaeXruzojwWPVU9NEcNyB6RbiLneWigqE4xxXRn8U",
  "key9": "iN7CELGcCgYGX63ragzPLv43qmdSZNaGjEbKpMiAnrwKJZyVuCn2Bp4QARdTeyneahJMVX78diE1mh7d3cdCrvu",
  "key10": "2G7c9VXmUjogCvxA1j31M7AkDfrTeTbe1oS2HqM1Y8GujeHvPVPavxu6k2aQEJDfDpadCYkYZVXUswh2B3zJhCqM",
  "key11": "f41t6dSX3iLdVxAY27M5HCGgCmaAQ2kqUEJ4d46j2bEQ6xvmpdHWoGiWCXThwm3gpje8EA1C7mdqe8GEbUu58kF",
  "key12": "5wn8yLSuucjspvvwNNqDpyh8YjmhA53NHL3D6zNkQebu6xKZXTQjQFY66HmNjetQCJXDfoBbjGEq1i2GcbPkceKb",
  "key13": "2C2aPicWzofE3CnDUWoCM1tJVS5tE5Qhu6rVq5ZBZRQanXmuhuCBBU3whgha9SvyVw134BuJZcuwXZN7mdkcaaMQ",
  "key14": "4XdHqrwxU9usbfA3ZM7wanqpjLQgtaP6sbDtJycUumAHoXBGSP1Fw8UEKrN3taT1uaqLYxTStQyDnNrKY1EXeMQB",
  "key15": "2rzzCXVWaLt1dke6dexHFw7qWMbxkXbkH2X7vTSm1vhzQ41UNmCWoKpW5TNCJBB9jaSq1aSANPKH5HBEUKaMNNBw",
  "key16": "4w4PsuBGJjFush5VpFi5eGvCPRzxyLJtk4VCUg3hdmvYsVAgJKUDja8AfXuwg4rsAwzY5M9SCKZJT9LV7hUxvayg",
  "key17": "2ajVcEGKbPgSsmJZqvEMf8BnDqHAHTxzApbJYMMYxPxAMMeb82XAzQS2LQBzaFDs3Ce9c1KwGQSrmoJmz52j9odw",
  "key18": "2JkVz7HMJDL7yfgsECDcKaC3n5uGP8iNiNorEXsf5c6XuKpdiWNfykowg5eUjhntYPuLBxDLwjoMUtjQf6Vu2piz",
  "key19": "3EjjQ7g4mm2z2CgdnvxUv1rkeYHK2BT8PqSegXBu2x1sw9PFRZ9f8nSqLt6X7exdfvQ8Pu3bXHPiEWJYa78a1Jju",
  "key20": "5APcgHbxma3F48FvfNkN5L3QMesoxy8eZ2TjwnG7YAuTUX51SRLqmLR4TmrAAjyYPAHhsAzrT8JPuCddJEG4xZw4",
  "key21": "4nndhwmY34HcN9rYM2LGMT5gDBduEqJynmvmXk32WaVR8jqDo3X7oxZdxbnRhv9YKZJ5DiG3Xg3QCQZzUTsJB4Cv",
  "key22": "2gKvhkbW1hwNupreCh8bSF47EzFg3LSPjnzpozBrEyhazJz7smCjm8k9jUB9Nc5wx5T7x3byW4FNX1hKBZAKui4x",
  "key23": "3KhkTwdACiJSpGApEeVzt1bEviQ33zzJTRaxWTk78gCvUijWfk85YRyDqTZDWPMHbYNkgakEw987Vjzu4YsNhQFU",
  "key24": "2UgTaA4i1T7Umr7VxiGMxkFGdEbuqAvZKrtMwUo5MeNhAh78g6SSauJoNv4g94yEH54SbT2egQXuSKiukYuBYdJ4",
  "key25": "2u4LQMMFKt29n1S2tjqN6ZXXeMts1UZhN4mDGmVZJLxxHA3iVbpB218SELTWAUSqbzjcC8RSDFc3FgLRdT7hzHeg",
  "key26": "25NUHqaTP2KySu8vTxxQmy2kyQ3BJCC8Q3KgH8V12nh4vvPZqTdGh3QPXxeUpr1c2iowdoAwNgLosQxDSfhs5boP",
  "key27": "2XnEhuNNZ9tTxjtnRjbGnF5DMQ5RdHUBn5xPugtajaQ3yyMvMhwsQbBSYvJfhcYQ3dxGJfVPCynd3rihQPabFxFT"
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
