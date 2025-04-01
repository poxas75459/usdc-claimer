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
    "52HRJSRJtRsXVtfyDauv79cYg15pLL4rPLmA2Kwi1wbKQViMWBjXLJriHCF3hyqaA7pwULtVCJGFfsLta6swLnsT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QY1mGm1HeLaijpBdLiuTFubFycwPd44xyVdZ3N4pNqRamJ1G1LXBgivg2HyKtMAVQz3ugXUNzaSi3T3i6XuUXfo",
  "key1": "2pgx6w3ry3rsq1RBA6sKVbLQdBBgeqytqK4RtRWFmuUKG11hM3aNx2Wx31CBwig8pRFmuNVwqfrEpCUxULzYDJz9",
  "key2": "3mN8dEitoB8thRKGfoNc5qiUFejb485X4KVSf6NfH1b1uZrfWADv9oYvwXyQ8asvwr5Wwtmmd3cRmwbzSv9XwnhQ",
  "key3": "44KkTfHFfHo9SYvYznQZQyNnG9iAtdgJJGjY15tX4bt132zWHjA1Pzrv5vHpLcduShNeEfVGHK9aDL5Z7LnHnnvn",
  "key4": "pMATiVts4gR7Td9GVP9GpmsuJjDw6Tpm14Ffvpsty99Nrwq4yRtLHUy3GXvwJMcNwh6KnGN56AkmqKhmnrK8FgW",
  "key5": "2TaF9Mfw9SV5mHLoWeq9pQoPX1wb8uK4tpibTiUn8vrd2q8jUijwKgibrWp91nTcDARK3ngPz1iMcwK82LbXrUSK",
  "key6": "WN7T8WZ2uVgzH6xH4NRVPmf5YnPDk9LNDxjLFTsih7nZSWXCsSxDckrictubETffvwvG9ZVrPnPm5A8wmDxt2aF",
  "key7": "1SrTqzUdKsxScrdqV4NyMAusfL9f2TK3es2NopUhB7UEiras4ceKYjiYZmzQBQ6uSx5r7pSX3yoszdb89KikMRj",
  "key8": "djnC4Dq5H9DThFNJcgni2Hrt8kSBoD4SH1FvfUSzkHSM8MS7Ng2UrmXhgm6y9vehguKfzEzSyoBFwVbJqA8h3X7",
  "key9": "2GEMmzvx4nUuBSHbP1onjgPwz6dgpK855TBGyfHQF14mpZWH5io5iucYPWESBzca4JWjRng6mgatzgzg8rfYps99",
  "key10": "3eKQRuuY5MaJzQXogrGC6s9Ay8NWcHzki8G4imBUrb5CuqZmgghrwR5xp1Dqnc2rdwrFbto24d3qMUxuzCVCsTMB",
  "key11": "61uVw3yDSvketiheogfqEinAexM1zKJmDPRPJVGiZj9DcaPV3CsioF8uuPEcEYxDvdF5reXSXUXxCADd1s2MjdTQ",
  "key12": "4LGy4pJqvUaQpPy6qaww4c94cW37iocUBmHS8AanY9LmR8e6KWopkFceKeqo9yyaK8qShLDTcK3EmCUnwA82kzRV",
  "key13": "58o43Rbz9cgyFzysmU4og42kWffJWNhubLMSh6YFvySxSRMycWTz7GpNdxaRU33W815mGVnMRKHdZ5kjxPMCPy6V",
  "key14": "2KmESfnuV1tchTdBZ5xSwRYA1bsyQ8mmwMomLjjPY3a8zcxRxMb5u89ajMZRB7PxenMCoRrtv1AQdohn3yqWxGxu",
  "key15": "4EYsr7UetozTrpkPyHVFtqprMwZLtgfV4xDkWLh4D7KU1kRhstXzBthh8eq3dQ9rdjxv9NyXjFkWG24R1kAdbxqf",
  "key16": "2b51qD5FtvmD5SpTFqmYhN5V3ePdfKnqTRoGByFeKr3nwN6RHL3tdtdLtH8XCHh6DKXtQqFfYrAXvcKYseduB4aM",
  "key17": "41fXYZRT367ExJAm4CLq7zRzqEy5rZDSbGJfPfPe9QX5jQnzhMVRH2EWPh6UzUBGLrBHpdTctAAZSWkuwiuzQPbG",
  "key18": "JmA4EDAjRbrg2NdMXQJAFa6Ptd8pqtMwgjmJFtCeKLhnxxPg1k9HFEtsGJkhBH5EUGBaGRP7NCGanZgaKBS8oww",
  "key19": "5bTKWFPL4NMCznwm6neMsErGkhRc1xuFUbRneJc42QWLP1r2woYEhe58fpB3AytPGWJSh89HRwP1qqfpkhFP2dxX",
  "key20": "4wJJ9XyFS7Xq7p5bP3CE7TNxTAmKurqoDC2NJTAWeEekGoNsJ5ifTpCTtZ6RowViKnup7twWqQ1V5xRvQtvGCUiS",
  "key21": "2oaBQ5MsJKF8RY3gVQys6Gn797k5g8ZZ9QPFRM3q5747YS5upxvyXchvFup1nZ2tcUDBk2PZbrsA1v34GB8VF8Kc",
  "key22": "4bKov49gaMov2Dsbebu57WjBeRsytSN6mppx2fSrc4aVC9MBFGTEEgasypE2anTNpHRBjp7mSCtztgurUzsYP97N",
  "key23": "Rxy8j1uqSM8VJRh9dKaM7dCacKBswmTVbscv5a9tQf5MfQWjPbTLSNgDKjSVfNmkEEqq5Na348qbh2wGE7W8iAa",
  "key24": "3HuhrBQ8PUb1ZPdamgP8u1DgNhtCZp8o8FAc8tBupEudVix46247BJUtwCnEstJs8HJW9qH3LjzREXtLwFraE2iZ",
  "key25": "5Z8Svt9uDzTq9hmB3pgSZ2jSprGgoCKyUMrB136LMVhhe7DW388Vx84KJTRAmaz6DSNiNWjkGBbcdsABB6JydVhV"
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
