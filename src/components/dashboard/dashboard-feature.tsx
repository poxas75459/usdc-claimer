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
    "4FBZQLn8MuHdW26grJq5Xfm6nEsTHhtrHfdJ3VYCKWTMHG8mDHYH6iG7obFoQgJSYkbTY7n9LjSFMUcz9mhhLp3i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48BV7Wp1krv6F5PqGRoM5gkpRW24NoVcYPjK4kntMFVxbT963nUa1Ff1RJqiCXzHdRGViLYYezbFYY1ZEsv7Lz4Z",
  "key1": "54ZwiaqSQbE2X2Nhqi6jkDNjEwxiHwtDVvVJdv4aP63j5zgxn1ipZK1U186rbgeMHdz5KU81sAATmVahDPq9fkz3",
  "key2": "5XFDFeDAWAuxViCi937bkCshNN6F2uZHuvjQjfcpg9gbScmEkHjEwErZF7LgVJ53BFrutsCc7G8fHncR6dHuM2EY",
  "key3": "3dAxuYnjpLdmbTqfBXZZ4crRW1vsvCMoJfUMu5LHUGWqy5DmXeZwh1sQp6NNKRsoMyRkHzPkJqRqnss1i8MTM2FT",
  "key4": "2x3LRE7BD9VqvuQxSHz57ys679UxhcysjmMzDkDj5DGaWmzkVW6gZk3A7UvuGD8hPCjmynJ1GhqtPn9oVLDYTXWS",
  "key5": "LHa6ccfKqbfu3pgPL61sdRTT3VcNGCebhUYwgq4nAuPPsuFX13cyUkemJsKZBnnfraPAEf3HcHi8Joq43Z7b1sb",
  "key6": "5PSHwxYpQ7Cgahxoqn26cTrMSJnBatrPTN26jv3nhvP8XuE3KgvAoNdtJc24auCaUxf6fgHppneHUJwcY9JFiWC3",
  "key7": "CRHKF55QBTc5vR4YeBfKDsSn8iz8RQV4DbzVVx47XrsqeVAiFK4jbcFWWwmSVNdbKhVXbKJ62xDStoEM52P4eA6",
  "key8": "C5xkMMmJ8k6ma7wi25DspofGyRqt8vSCRFoN9BSy2chdgtyPKafubN9fxTqGxU1mPKzeVnyiaTzxjiFwh3z31Lg",
  "key9": "4G3kkjq3N2dGZD1XXaJboj7VbWrTDNC7m9CKVrpSDEKrtio5MK3E5e2rgn9yeNBTznAiUBTCAXRdRUrLiJ8rVVzR",
  "key10": "3s7tXhw8Ax8JPvzeLg5xkHtTvBpD699oGvgVWW3Jtg8WsvtkKS8Z2khN19EfXYtaWM149G3MdyV46u5ar474jSzw",
  "key11": "2ufmNZdv8icxD6jDij9pRsmu2YZz1pEHdoof1eLYecaJMMRc5qgjYg3kXVhvWfzoCaRbTy4tyy6ZhhTxawLS7FeR",
  "key12": "5RFuK8Ge1YdB9GuncY5B1mByPchKTAt4Rk1KMTUdawPttgNP2toBiyxeKkRAbPrgTnxTPsf262mUGX72228dmqoT",
  "key13": "2kpM5V3QTYcrgjoKFSDSiwBE6sCqPbLHXc1SeHqnfdv8rZar1Yhe5omTKcUsnJFxZmptdqGbpkKYocHKc5Tfuiyg",
  "key14": "4ia5RKyoPXBvBRZ4uMbKQt7hZf2PuvAZXKT5HruU5qmuQhjp88MSLDeDkrnG2n7Cw9zBdudUp4R8tpW632cqDUxm",
  "key15": "5Ga2UKDnx1vh9pL9RtvSHUE8j2rKgwJzKEs2xT75JT1AmqPHuDCbpg7aomyoGjq2rqj4sGvyex8ewHjYHH7tbMP1",
  "key16": "588xTr7sxj9fEsviXA2AQhvupoNH3TQw6G8JqTigznyUECfaPToWXWEcnLJVrfPwYwMnc51bhqZBqBv2vda1h55P",
  "key17": "2cwRnui5vjSa9gehwmZPJAsagAK1tnhTF9uAEDxbAAtFvZKffsWsYQ1EtDKNGeh3DnAusQkpUjXV1z9uEqbbFiHT",
  "key18": "4PwyVdQQNzpx4UPTrVe5Akyk9WoT42jFqXqaKPh6oiYVe6i7FFJ2FXuuKQqpQH6weBYEfFCipCWWpM77MQe4cVV8",
  "key19": "5us3KNGZLjk9dn8hoJBc3FXwmiY72qK2bUDeqGse3UP3bP3HvvArcWZKmTeHuUXYkHAmXB3mZ4nxUFLkTmLnxz9P",
  "key20": "3wjL9CyPPYUf7TUaAXtJny6DgqoWP8skDimRrAKBjEAxRVDrNXosrThVzmkDHf6QHpuX1uANDG2SjTTZSBKrFvVT",
  "key21": "3b3MCL5dkr6LXi9kw5dmSpLDLAjJbjYe13n1BKTW9JuDb7o4C45mQJYxQBKoGMe867WWTbC62wSuL3yrGFukRH5S",
  "key22": "2PkKTrAUorBSGTim4GrWfKePfVqSvvqCDJqCGvzstJLeHGiYabhgExunXNFRDXqsc73UaSVuoPJXQDR7est1XYab",
  "key23": "2sYGGthFbxSu681Yv6YNVDGzXPQ9hxhnAaNCArKo5ZrsfgX5MtwZji6TH9UKifYtKfNkBpmDs5HnThK6YRiTFYSH",
  "key24": "BspkuewwZzK9eD8Kf6j71q3d4uP3Los8idzA4pX3FEDUQ2vYg6xupeNPoA2fKWJpyvcySM1sKHHX5pcwRsR1VkA",
  "key25": "2xzMofFt1CysPMREbQykr2EYu4sCYGrSffDXP4quzS33f3g63gh8EWS5EDiVB6eKV6sjogQKJcLWYji6tT1xcZfS",
  "key26": "2KNTRG9rdqEXSRGMeXURibu7ttgRdXBcH5dtekSbpoPYcDJx1fTmMmeoyXw1n9w1tr6mxncBLkgFBEYtWESvzPX3",
  "key27": "2622JWuTFMn2ofA2utcjWxirNUkE3sWFWa1mnqunMeUUwYmabHnEichGGicQ9LbWKAJXiicWYYfqaVW9tR16RKjE",
  "key28": "4ZdTsx2tzQJZ64MssM565gMXcY5CuYnYeY2b5bFFJ7CA3vMgXW4gwADgX8ksB3jKukQm6RWAGReVDMH2y6FxkKCZ",
  "key29": "3yCXYzgAjnSnhVG6DsCUCKqP3J4fhf8GAUYXoJqX3zfUygvchc9Ut2hifZgnnw3wbzqx3gHYunifJrNpnf6VxW2z",
  "key30": "61Sug8pPd4fpkosPTgiuKPP9YsFZE21wBhEAiUHZoiYQYKa6X82dkocQN4j9B3GAaecMGqrU4vxamZuoD8Z4Fso",
  "key31": "25PiRdsaEnGRweooXpXQZzprw5kT9Tszuy2eKiFSZdhz4ahFgLH7A9fpjk7JXSMzcWrw5EqdNM2pyZDQRxPHgb9m"
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
