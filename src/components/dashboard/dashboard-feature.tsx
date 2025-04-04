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
    "b1BUowGLCuiRZLW6QEQZgbdxjjGdHRThtcGgGS8zDfg2FbWmwDGGffdzxjYbyfDqSrVayCcnk85RH7JHSXdwad4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3t9FdigrPrmDhrsxGZsd67e6n4Axr2bFqVh6nLQa359bbKsh9ArYSZpmJnE1T3EkxzH6Bc5oKFf8N2ivjfchShLJ",
  "key1": "38mX4qSQqQZjhE6TT78PrCaEvXehPpzAbEQThvWMHHJVD126pKCBCd4iPn37CsVh5Y8h8xrLbGCNXeAZMgA99DSp",
  "key2": "4ToioYqbhdu3grwsefGzing1gg7c59KSHms3CRG4zJqQa2sA64MvBYn6eZaRZLbmN5jtPKsa4vo9q7fJb7dehQtJ",
  "key3": "uFufQ8kTLEEXoTu1DGu8A1bgsvRXybxRb4H6DRdie6ULCbT2rsrd5hoQskX7a1AaGf7qeE8mckX5X2DENTWbbDf",
  "key4": "22ZFWr8CcdN3Wo5oVX9rcqPLt8QVGzQ5L2LNFJkVuEJYfaZcjstDTGwot1AbPbdddksJ6urBPYZc4gHQhfiayKc2",
  "key5": "5PGZLEgLBXFG7ds4i9mfGPNsbBCFr71Znx1dNuYqT1KRaxkByUmiE824hFonLitABWP8oYMcSfB7Z1QpotzVGRBc",
  "key6": "4ADkKYxe5maowUpYr3487GovkpaMnhNHNgg27wKdz1yU16EL46QfL8ZDzZb3tUTmErNdP9aK8mnrwo1Gqpt9HLCD",
  "key7": "5wXXRijkqXpHhsipnZ6HTedYuMXwz6cn4jsRCKb5aqWnx9cFhRtFBQtULoaP2pMgr1sRQ6BXqJfo9o11Pr3eQvTf",
  "key8": "5vuVCdFLi6WEo11TWsDwhXVQF9QAYkKvuTu3KnYeeyTvmpT8jGMfnvm8QEA6d2H8NsexMXeySCw7xvp8iHBbWCHR",
  "key9": "LuJLWdGsKw2toS4DgmpUXFLUerSDL7RJU3tesoT3ANETPBnFrhSMwKxYPEPc6M65R4KVzVzXGCjbVqajpnwzuvY",
  "key10": "psgCTgAYBrbhRToYUZAMuwymsy2e4Bppjh1oxEN4jDybnzUug2Utug2X5yfHf5kAzUrHME4BYvjk2dNw5oTZzBP",
  "key11": "2iD43LXQmDFYY4LQiZdjMajpYT8dWQRbCuWxvPMEJ4e6XspF3vvTC61ipAFc2SFRTqdQEURHrmtNX3JT8bAk9sbU",
  "key12": "49sudWb3YQaSZeZZ6V5E2rFCszUY7jUW8TkAzJukzqYATzSfyNDqNNhiR88xFmfDQhoJxYdZPsw85akh5sFCdiGX",
  "key13": "3tkJycq56ty5jDjmTHxJiHt3cWnosxcj1Rpt7QPpRAMDtp2jDdhrVX2qNZ67uqMgcKFUB2SRVCpsGpghSFeVve4V",
  "key14": "5JZg2riY5KaZUV9yM8wo1HXERJ6kSxdBegjFx5dbJi1e8xHyDZucT9HUeMS37jkurjuvXzFCiDRYDzagpsNeP87f",
  "key15": "2y7t47hGfJy2WFCzguKSDEiH4qgmCfE4NDN9nBSPEPTBMTtzW4nRqkTGTsadr6z65H9bE8Qc7wLGWt2u2vqJwJdX",
  "key16": "366LeUAotDrWb5UBAgQSiRx3auKu4vk7CmxkPXTBLc9nAEaJtosz3R1MkpTKpv1vevsAhkty8nPapwfWyrhxjqvU",
  "key17": "34H2R1ieA5KJqt4nLMVBU9otpoPauWVDi2ba5syX6b4m96kYnhARY8uXgHpgbf3WhuPfbrrumELfNsAASnC3mrLY",
  "key18": "3mW8rEePoq6ADG2AwbCSPkdzC5VpTErGrdXCCmcMqYX67zuhXtJ4NMwbqzzsyJJL69XfrFo5UoRwLaKA3nsqvm91",
  "key19": "3oQVcqMzKVpkFr2wWNFQoJax1Ng8e7gXjbpCbsKaPP8dXJJnXzF8XxYGXC1cqs8ScgeYiB1RvGphG88EVdn2cH1K",
  "key20": "4RYMV2rdCYKo8h21K747B5wHCk64hWVqbcaR6eKVzz1NFUT1ouynYZYeJRoUpVqRbQUh27vjy7vqCaKMpBN3S8rc",
  "key21": "2XHcHHa9fzZeEMj6oT3YAdjePTfxbv3LYz5zkAZ4scJoq31K31dEwxbDz2mzHGDT6dc9NdRWh8b6H7WAGUKmTjqn",
  "key22": "3bw8qsHEUWr4LBpqEzTh5abxLQm4SjgX29xGAsXvSjjGAE7DK4hTXWDH5yLnqb4NSmst6TpgwBvnBMBXvQtRvwxv",
  "key23": "2XbhEARRPCNzKdStt7reo6sacwRfotSeoTe51dSbD7ErznGFzrzkmmLLKGvSmz2Km1JASEFxxYMzALXouJq63h2K",
  "key24": "3C4ePqJPndGLsEbu6wRbGXch4J1GPKg6ZYcjdxkK1YQzo8nU8XMDmaJuAkH2LmNVPttupe5zaGogKKWzH3o53g67"
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
