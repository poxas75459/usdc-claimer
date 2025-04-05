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
    "61dvPAs7LYvKNGU4pRgQTh7VVkrW4ssERr1xEj97kZdJ6qDREQV8UCg8PzaHWLgmfpAWrxCwQcSFiH8FX1rcvC9x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cnZRGEhRFGxdyALX3NYuGAi8GJrXsusQeiYTjjQ6ChHxeSvLVfpx3CUVTgZSU1dhttg2gVhuoWPQ2fZ6hgjgfyX",
  "key1": "2C9dxooKTMkhM3vfkPNSEPYjhCXq9U9uicJZ9ZtjUjecVpjbCkFWMihBqQhJS3xEtsJV4gCm9RaXBvgpUoou6M8r",
  "key2": "5LkP2S3GHtpkUzUtb2bq4bKRiCxsQHA7zKXG4H7ykiSCUcSNPZjmfSKtAFMAuZSLCzzJtAHHpcgajTBpVcEHFB3K",
  "key3": "j9d4XvJD37ta9ZSsLgd2db5R9niKwVHgv3BWWx7FPTWaBrE9hJge6VWubs7pT86fZV7yXDqzPJxZHy6otBj6Hpd",
  "key4": "4yBHnMZpi9XNfHNGTCUW6BQEhtD39A6KNMXuWFBFbSrk1uM8yMwEueEe6vd6K62jbVwNMFvt9SBTKnREpNtBicg7",
  "key5": "5SJ548t7RYm7wB2gwVXCxEEccBpXaRgaCeW6Kudb8FFVcGGqZ2M3BQcqSu3BVAeNiJRZvVddgMtdMbX8dMAfBz4v",
  "key6": "4qsEhxJgcM6MjfTucQjSpgZDee2tRm9cK1iHf95rV8LjRQdH7hJWdsVqakhqyzkubgcrb5tjVxvEuYQ9KSBKxbin",
  "key7": "3Qs2bapK19NHgPVRU4WzWcX5iKrdR7SZCTHj4S5qypqMW9YKnENHrccE5PX3e7o6yiXw7QjsSiwRtWdCHPwSMqpS",
  "key8": "2CSV13ez3xwXtDzNKMmDzdxKLTQ44wUyqKkxVp8rxpZbEFx76dCr3vnFACeuHft8xpYeNBwBdaA2An6qUCfuSVYC",
  "key9": "Yd5XhwipesKB3sE5wTcsTxkEVvtpoonXneMe1rn1fHsJWJX9SGNPHe6eDaN1Ek8CU8tTdHm8BUDvKq37q2gw76G",
  "key10": "3paD3KQPjc5QEoktdypwTLuNGix2PXSRNAMZNQCq9nLLdrByPacYwR1SQ2DymfbE9HQE5xB4jLoBtHVoeaFtnqVR",
  "key11": "2nPqLkceLnca6z3rBCLekHhsFCLfbnXfau1HY4A8eJbPpTekf3GtCPgys6LP3chQHS6jwZ9cjTgn7zHMLypjNcBJ",
  "key12": "5ZGNNoctq65VAfguf8AMo3DZnom4kyUjfmmVpabbANgRHNTASEqzebAhm9RNyVSNRes3WUwghTg8LLxeqhEdjqQJ",
  "key13": "3Bm4tyFGvUwXVF5Ke2L2n5hyQPR1DsZp9p3WBGQ17zfpSe5FGzD27fQ9QUzBiVXrv1T35RaKhcpSJYvupzJ8K6ci",
  "key14": "3ULHEMvnZCCChZ6QojQ6oDrkGzDGfh5UBNJMzNhA4rUn22tHDErg4DY7sEMmdLDejZu2pE4xQHwdJcPfkWQTb66r",
  "key15": "4avN1r1kzJUg2CVGggSrvuc1YZiX7cCLZU4nwWqKW75SdfF9BRmf4mViAewpJJYdGsKpDNzSHtmK4wvpeDMFq8BM",
  "key16": "4jK9yst5woWnb6PR7uE1WFTyhJUdRbSX5raBSknQrVPPtLFvCntfWuukGnCqPXJq5QZZYA5U7BQgT4dnZbEDNF97",
  "key17": "5qZK7d4zHtT5R6ZeV7vRcSFcNyEJrH9gLmJRZ54sFkGjam3FNWcsoCgdWTM6mracxNuGm8X1iU3v2jX5GWtwXnB6",
  "key18": "7VzDHV9hYCJ11joSHZDjyhoVmcnYAn8utjbixcmdUd75H7KtHftGDcGsoFM3rZW6iy8YsPBiHhCyQjEYB2vWnk3",
  "key19": "49bnrFTVSgDW3Bkuaj7Ge8wHx6AHAJoZ2f1gtmpe6yYCJr8BuK635G13iMjbXQG3hxkKTBeJg4RB7GnVywfmagAo",
  "key20": "5rWEXgrXroC7MkaRpEVawErUCZMrhCYSDDfkSwKZmAnDcAqBxxjCxxtcEyXRoyvmnYCnmCZmprngD72LVeDHjTFH",
  "key21": "3frBA4ZVa1Mnc4U3PiMV19CCEvsKvXSeMxf9R8gkSaRNcAdnBtQv4dzVth5B1a3w6aW6LB27E5vXrprZR6k7vMbb",
  "key22": "67PowETNvysNaeKkTEw9TcWfJ49yRyyH3jpf1gQ8TANcKp5GP2whP96ePLTuBNNGVM2HXPhG5rHsDq1oRMk6CZYt",
  "key23": "5TNUAcuVwgQpWgMJRkfg69zzwzB293XRU98REj8UVEqsi2jq8kA9JT3cV14SJZxStzXnBE3z912YCFzHWTn5o2g4",
  "key24": "5EvL1yx34TWTBpnoKMjDFRPkWSajNA1p1u2h4GyhSnD7mMBvSsYdrUwUW9JCGV6qtKWuByCWD38HRQVMgV9CRwgj",
  "key25": "5DodJwkSuqdhLcD5YcNmtM5hdtdLHuBFh9NbhBsgMfpYi3NgS67AW46kKEDTVYNpKP3dAAzVFcPbbrz2rDBmjdVm",
  "key26": "596h38vK5V5qUjKurdKx7SsR2ZvvckbxyygEE3inS5JjZC2SEv3oWmVD431ihd9DVyN7EdK3PttFGrdXRNDvBEoY",
  "key27": "5W1DLg234zQYzLertMgAu3Z8kH2zUkXK9Enh3NHpBrJ8YEwBEzNFda5m6xaLQ1C2RWEwAYXSej3NXV2mCYYwqkt9",
  "key28": "3A5JunaG3FFp19D5xrfCfrw9RRVVhPkvz56kXXLtoPTTXAAmB521CvLYpb2S7po3edAYVBLQUZm7WCBKut2zTjfX",
  "key29": "kPwRPJs5ESGrJMpTVc8gDWJpyEXrpHgwdL7YnKZxHYNgGhbKgCQsa3aBs9pj7oCcFuCnt5cE1bD2EYuVxV4HFyn",
  "key30": "23Q3DCKnfThBUB4RiS9PxteC6VhRtqWbJCQg11Qr5JHH5Vekep5z3mHGUMgbZP7joubPZcUe5DpyPFHwxUSW2Ap3",
  "key31": "5amj7jxSSLGrgitLsTpfJwr8MZ7Vv9PVEVi7ZxrF5sbAmm8dePrMo4E4rfyAz7usxZbhTtMfDkyzLku8DuT3UKKs",
  "key32": "3BmQtxuhV9Cp7fQmyvYoj6opqn32RM8cHgM8XsPkG9Z3WUB4krghfqFNK2cYZ7avsRMJTYyhDQQtR1XUVqw3kvUf",
  "key33": "13XA8fFqjPhwfithcSC2n3vnPj6fGzfNpdpTZcmNGFnxwpnuhmLe7YFvDcWQBh8doHAFhwP5h6EvQkNUfgK7jyX",
  "key34": "3NeCjFNox9wbKrtC4W2SajmpzWmMBXo8r3v6xDu24WcRoAQgsFJBDk1dgDd38dRBBMLjweT9fVxeQmDUz5iyFbfN",
  "key35": "3v6ZTZSCnF9tuPg9nNwmhdrW5qsd5bTqUFwu4fuHYCoN4YTctUzucExjwW4uYFaE3ZdHwLtJe8pwVWBdrNmzx9Sj",
  "key36": "4HfADA4C5Rbz98sZKTfhi2cF93DcQwGXyjZet3imMC4TN4uzWfAN2weeGWSEhqrfwiZ4jAhdcsezKbe5LC2bpAsM"
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
