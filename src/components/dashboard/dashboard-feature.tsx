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
    "22CGQKhAw3qsMnu3ZC2Dd7QAtcfo3sCxGtf5P9ik5c1H64AdXKeaBD8vKqgz1CGpuNGXfsJ56NkvkdUir28CW8e3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vkv58uo6jvBUd1dHkivzt3XsixBnFo8KZLBMzuEYhjtWZd8STjo78v3kPzx1wMUR5feVTHLsVx2jHYetcEsww2G",
  "key1": "3cdQs3JGkCpukkgSbjSws136oxnpSHg7B5hcTR28fRBMRn8g9HhVoNUP29xao4DKRsm6BUBJBtQTfhfHD3Xcfy9r",
  "key2": "2akZd3AcLCcBxLjCjuVeGAeTGDpY5BzvrFNumg2QqXcfPz6jjoK2PqJ4Yg6XnmLLNnLPie7NtTQr3waxdgBHre47",
  "key3": "KQauPnm1Upm8z2gYJZAPpuyWsK8xwdqycox7NATy9vSUpTTjXtnTRqsy8Uauuskkpi6hqf9F4Fss7Hr2tU75izH",
  "key4": "2E1MLpZ6md6JVtUJ6V2PJhKpx9G6NsFW8iYXMZuFRjfFfrvmyRTNXCzNgRADyk2r2Zha8k5zoDDUKS3fZ5wywaH3",
  "key5": "3yXBuzAU34cfnVaZL82iR5hQPBMSAWiKm9t1QeaFS7CTuVeH4igwXL1auWCSboQozNBtz87baSTr6fdNv4KZeo5M",
  "key6": "2F1QzT5z1JyWcHH2yEJU5ynG7x1S42Sxc4a2a6EvJMpXtQErPeW8Nxq9v1UKoDK9KubrmLWLJsuF58GUN6G6BTTg",
  "key7": "3Px2pRo6Tf3rM6AEiYsa1keev1oAzRN26RBC23vXECnCxYDHLb8iH83CZgmGSr4WVCWLSMNYwiXPaJhzxXcoknqi",
  "key8": "kPR3SzfqzHLZB348r1sXYcpWKpsJAx4QdMzaXRRchMDviUijwzUSu21zMYNXBAJTnzMf8MSEKaL34TcNH9Zna6Q",
  "key9": "36Ax9Co6XJ1ZMAA2gLaAddJeGXrSSQpnJgAC8CPEn5mL1XFL7HMDnPBUyFBoUotBqWMhY5iCWFNUTQrUxSjjDQSX",
  "key10": "3ryzv2YeLcZaphXnTLqPjPHp6uFETabmYaXFfQRpRZMMrsHnrBryY5TvNEyeUvQkgQoqXtkJzwkLFmwjev6SY4RS",
  "key11": "23BhnRsq8pHCB33nWw9YF2iNxjzHVTsL3XZWzqmXyx4RGDVtC2oJ923YruYvHHKGtq1pmASvT4M6BQ5mzZ9axg7s",
  "key12": "3M3cyz5aFF3MZrL9R2sL8ydoCoLcvDZVfLsGh2WbjzdR8mUE2LFao6wgvn3M7VQmBRGqVvs1qvDexp8M6sTZ7ziJ",
  "key13": "NMEeR7EvFH8GaZBhZWybj3my43FNQTozvAx3vsAg4ReXD6g3CsTrJ9a4AbNfEUUMpb8vc67UMNHY57vcuYLC1Ty",
  "key14": "61koFJ8aBvPrQPBbMQg7rNHpW63W18uKcTGGmjCKPSBo22uWZirQEMuYMpThsgzA8kBFeisXGV5bbxNEatVtPu9z",
  "key15": "2NdLaxRF7jryQ6QkaL88BuLBtvXcbETqcWiwat2Spbq53LcXtCtQ6D8mhvqFjewU6xPr7amzAi5VeNes2kdRSX9b",
  "key16": "4Tn9J1Mgtin8uNY72RqPu1b3NvQn3xrhcHwrTmQ6ZPy4ZS8DFHj6GKCWg9FcByt1FLY8CknERwBvigBQ28FAkBFg",
  "key17": "3LyKCwffpMYfsW7TgYHqMMiG4y52QUoKahwgW272EjZFsV2wU4hHX3phSLtCteuqXFrtxFuJ7Ydiz1LrBUBQNmhQ",
  "key18": "PT1Nt1AzvwcpKPmowhRnDT8XgA8x82QKQcFsBm4R1XPzcWMkDUsGGfDajYsM4ett94uaP3ah8wVEX3k4d7V974r",
  "key19": "327FSCoKeBrERcsNZAaqvA2FkEzSWYtfFtqLtdaQL66SxjWRmpfgv4tq4FbiL4ssmE5ZgM4hBvJPDvyPHiokyFu2",
  "key20": "ERw6TxBxFe46KL5aWn5EnQaiKrWicedXvJqZbRXgJgWVjU4qUFWJ14bYWnTiuse1kobrKNnbe1Hjo7HRQCispvZ",
  "key21": "4tqUygoKjgYoah1G8dSMzWR8V4h6aCav19BE21PHy6GSJAnjm3e86ZJHURhM6bAtwfGbhsZR1Uh6eRqKLWcYWvES",
  "key22": "5vgQfpcue2Z4BFZzJMWB2QsbQV3uxGxwF8CYhKHc9DWcDo3SDrz5bfmcT2eT4FEZqeyMAf91NqCohq92kvPqYfRv",
  "key23": "3MH9D9BK2Fn14YvUtigVuUYUa2LqgHjguV5aQc7iuayzwttmsYagBPXtKxn1rfhq8fgrmbVZ37QmZEi6aifR2Qe9",
  "key24": "34EHQwAgcsRaNRfQztsLQxsQiujChavomhQwwc4Dyf5ALGwB6UUEdDSpZ9DqEL2AR2dyfcCU1gsLfxmwitgtitha",
  "key25": "5eGK5Y1rzco6rEZck89Kmh4FBNDWyncRHT2w9LmiJqd6htc6viY2dTxMAkmqTarnGeScFeC1gmwL6UBPVuM3DAta",
  "key26": "28HxFvjGJMerMbJQoCwek5pn4Z5Kr5ZoR36NNue4NpknaNbWVLyHssBrUJ4W5K1AvjBQCmPDSucHmfYS3VoXUNC2",
  "key27": "5Htax6EQYwFj8WhuSKtKUfLxfjNY1wQhZ1i1BhaDtfuqHibuLBe7tiU545PfPvUAb5UP2VjHjMZefUMin7jnV25X",
  "key28": "uS4oJmbLZoVUaR1MTmR6C8fsvczaWbAYitH12N18JqLHcKxfNjYLUVjSFo69vwsSCrWk5TLPWne2aoR9SDHLGdH"
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
