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
    "1JeqgDGHiB2haciaQ6iGaqpku3VngTs5UEYD7SkpwkyV2oapaPaWGPDoAB67ujiumcd4YdLsifqUqkCbrQZGEm3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4geKmJoY8QAmSvW2WfhBbUoLHmMRdoD5e4HkjWfJULmCMZbbWfh3MkWiiSHdiMPTbHMXxXNUtwbgxUXeZLEXa8XS",
  "key1": "4WKx2GBmCYsupTq9MXUg4hV8BbHr4jnpYBjqm14MhY2YUDPGADyUN4BabnAzXoxS8xPHrR3ZVZWB7CeF6H7dALoS",
  "key2": "pRHKy4bt13fFmJJXhjX6X8fFPeWis98QoHaFiBoh618Bt6BihuQL8aUAofVNTJcy9VcbxXchDVigQpqkY1wL6di",
  "key3": "36xv4b3xuQJM7amjYp7cc9ri4vj5Ja18YiyBNKz4Ez9pxkNhWiHQ4RbLP7oDTku6HKrrpxSAsm8qZo7iigsLx4wt",
  "key4": "4E4qMc4V54RHNRnHF1a9hZcRkFYssGu6F3Rtf98zqqGZZEzDzNWiLu4QgxMnrVj8Mw9rdq3whj5zZwtnWe3e8eAB",
  "key5": "tfDTTNMxcCiQYybrjgxbMogYveu9pyiqZVTjqBi4CmBYCa5E6FVS2muwik8TbRrFLgxLwiXp4KQBbwuGt7x1itP",
  "key6": "2KNc1so1yusgpQupc9WmvfjufqHwExK5ijxgqQvMCvSmuYno6ipvZ9fPfzx5BsfKgqT7phUzeJEMgviT7hwTk8Lc",
  "key7": "5BVLuaRrsTyGKGNywQQ9J1h7h3aCWYRZDw5LBKUxKpwzHeVeXkZcJC1FR5oX4hNuGxMLLfLJUoF7QA8ALvHx9EP7",
  "key8": "31L3ZyUPe11R5irNWjCkZq4PYL8S841Lu3vZuj2eDRpo3Lijc9ZqiKPjbNNFSmiD4c2SgqLr7oWfGrrJDVQUjrGq",
  "key9": "2qpQd3XoSS5EkuwSAJtxcPt3PrwGxqWQvHFtMcYdWjC96Q9WffttBTVKAi5PCfxC2XNGNKdwSWFe8qgcQ1JC5vLK",
  "key10": "4FiBA3pis8fhQ8U7AB5GS6XT1ZKZWdkE6HDka71dqqu2VFSAmNvVR9KrMYKESaW8x27ZC6oU629GbuArpwKCDTjm",
  "key11": "4EGZrtmWmVBH8u9e2gedg2MDzhSRYDccNC7j4uEG5UAxdJ5nCjfzsEwcpT1m1niyeBfoxVuV8r2rqAmJWjTzPBYD",
  "key12": "37iqnt5cG8WWcCwcMtFDwkxtMx54Tum4JxqhL1UT8cwuBb6esUxJsPaLVNutzPNot1yVvvgZjFBboBgUkjzyYA6g",
  "key13": "ybvykMzBN91bTCtW1G7JWs5PovxWodozc9t72urB8HYzTFwxkEt5YsjxRkFwahMT32t9SRCgocTXKdYeyBn6DJY",
  "key14": "3hkRDHonkUmPkZrxjzXdh7S2LzGQwLGHFRSFKiwk5bTWhmU1dS1Lxh5nvBdsSqeBsX7rho5SfTXvXQ6o9fRu2mYv",
  "key15": "4cTD6qzw1SJKtiX8vCTTLWHQzsqs8Dyo275dPcxtgcbEwLqp7pAYBU5K73qtoNJgpcBzTpBBRMvTbtY4T1V6x3Qw",
  "key16": "SLyTEJo22U9QMdPFpUhXA3qK7C6AzrpamDRWuyY5qmcPx5Ch7e5eDD8srPmRX5UfTjraVK1WAzQWp88t8MYngJS",
  "key17": "2k5cfvx9TtxhxFKvzEhsEV5kPYeeUgNTvL21C4DVPdJgcBMNkvfv46ZzK2mqootGfSWxNLF7y3jbLER8fjvtRi9Q",
  "key18": "4BKSNmoFfmLSzET9dxzwzEkg9AJKEAPRj4rvSuphZ74po1W2ux9A58rZ3tCpo9v3vBnRLjqNZnU2aVnq2HZ6EE1j",
  "key19": "mrBS2YWR4nqrnxynWftVBh8xtw7EQLThrp3VN1gZhFzKWRAevBFsXVZwk81mgdwDuVM8GPd5eEQHrk398n1ff1F",
  "key20": "4GWDbpPLWP3ZQN1eYBZgunTJL5GpXZBxsBN6CaQC1XYubGWYaMHWjRgyWC4RDZBL9tFU18DiFxgnZo5ws62LZRMo",
  "key21": "2WJuPputrDtDgTdNFpzxGXjifD3wvxMpk5mCfwGn673FikHzVQk5sHhhxbuy4GiBrEohHkJDrW8cNYaygX1Mfeb3",
  "key22": "5gv7UzcK1rDsMnoP2raKsQQLtZfw1GaBCTX9gyEBMmTduYpfWjGeywQscft9DhPcc4rYTSHPkP8xtzHLNdZnFkhy",
  "key23": "5Z3pZkJLPfpZDAHhCkFico49SEe5GdApWCF2Na4aa9gLXjPMmP7o54kkPanhqe3mDCbY4ftQMjy6Tfv3rCgjYULQ",
  "key24": "59DLcBdYpELPzk1gQRUQHb2Vo3B6sGPpeHSig5rBiGgFiUd6XNtQSyBMC28NJh4hCGid9NVwBmmEeipzUtGrbypY",
  "key25": "63FzPituWQuCdpbwC5rKH41RjEL39p7HqCg9zCHsZL4MEDvQCRBCcSfozkkyt4yiaBwJY1Q65grTTSQ7TtidpCuV",
  "key26": "5CUj9BPvh2feBhDW4ZrnHhydRNuvEzaVkDyKxGDmejpSyY4NMCLLetaKrUviYeCTTKJj3ybsZfJ4d3QtU1ytyUNk",
  "key27": "5HMNFtgWwhVsKjC9E1fTLcaMUbRexcYDSqptxdmAQsb2BsxYwK5zf4JNy9Cgqo1VCnYzFxmMHJNZvuxNcgZLzM7n",
  "key28": "5mxoy8gTU1eJoQ7fvSKy85UBbsg3SfQRfrEDVe38fYrwpBwQm2sXqHvQrDKvrvUVjHCmriKrxY8oaBFyGZsn2AJD"
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
