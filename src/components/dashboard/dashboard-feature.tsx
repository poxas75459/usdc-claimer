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
    "3sH15R8KJDzcTRiJdhKURazZ89JhmSc1rzXtZf6YSXZzstnFLJXMR6kDB5eGwYQi3hCvB4PPkcW5wT4hBBzgN6qL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DQungR82mAgQiBfzDphggLtZLLuU2d8RVbSM9GfYbNETce9pxadUemMRdFJMbthQ6EhUCHjnsM58bjsnRKFPpsu",
  "key1": "5iaW7pEHa3g1288tNzhxaXVguKr458sNjmge1gWAR6K8uELsvQRH2nBwV8AWNDadaWFu7f5B5smS35ozS9PXwCNn",
  "key2": "29YrnvYdhcbeAwMyyxBZepDgH6FpDtfsWvbpgMbDKXUrEhUW4MfWysJxJTY6hRMGS89uiFhEXpFwMq3yWWz7Wm8n",
  "key3": "3kuLkC4abxSrCvEhcuPHJMGoZK8Ni26AtZYAmTPnLc1s2T1TSWs1DgYE9eQWJ26N5QhpJdZtdRxPJ7aBzdJ9iPVM",
  "key4": "4pXPWa2dZL9mQwc5rs2bMBZMngrS7cBBYLPHwEL22jEBAP8B3LdE7oGMvucbjEEfyuHKERfWsi1m8eij46FMgp9B",
  "key5": "45TqoRjpdYpMr3QKRovk4nLaCjE5PVhP7sKHCobyxnm9F6LDo7aNaE1ZMY4joifJoqfvrpZLiZwTNgLo26ocjgY4",
  "key6": "2WuekG1cPX5dPS4BwCZ5MWijNGrXVKvJsgShHwf6oMKEnNvU3wT2ev7VQXBp3srjVPdcP3F6v5bpvvdpZ9qcCa9c",
  "key7": "2FBt47AYCNobzDP92YRBp7PaKUf58zTWD9ErKUkqmH8nDJVc9H3xqmjLmzpmRuMSji5VYVUKHsQeSYrQ4w6A6Tw7",
  "key8": "3kDYUyY9nHtnhHV43bsqihvxoGtY7SAm8maMv3Mzm7s9WEGBJPGVZeMePwpgrzENb6MCvDNZbohozsYno5CEPDyu",
  "key9": "5RavtAajjRRLtAVMKY2HSkTMk6joTMEX8BR5pWBbVmdzCKxfesUsKtwPb2AKUkyeUgAeQiJcxpszZCJD4DMgkqNY",
  "key10": "63tEVgDWTii89BFJvmQcoyihpsraGaN9PH1Hf2pkXsD798Fam8rFAENqxa4gqknxMidmfANmS6UpyfTrA2iczm4Q",
  "key11": "5YVzWMrXuiBNpKwrxfAcL2p1S1A5zygqMbHbardW1vzkW5rKm27RwmNHgUtPA5aPQkxjX7aovFt6b8KEUJrVTzUB",
  "key12": "5v6T918f9zvMjf42jUNBNprUUb2R9kydGk31Ff4TKVhYPg42maPboxtJPHHp3wb1ptHarLXrq4d61iYhbUUHK17Q",
  "key13": "2s7DJuRqEkAa2tiRt7zfSNkyJBwwt4NAiLyrd4pcxQLLPvBq3eKnXyQnqjUbaBgoAtbc1Zra2tmnw9aWCdtTaPhh",
  "key14": "tbTZoJbGixCqkJtt9cs52EGgtgGvUwKm8TP9uP3wDmfFqYCzgzrNDHHakZP3rpd3V4GSgzXgKB5xABeak68mL8F",
  "key15": "5QkguqiVPQi1nNEwrWSbk5FFChkwmegqCDRPHjyQDDFfmpdGkXhJvtBy3LS1FAnR11ynfGaFBauWspo3Mop4eqdi",
  "key16": "2ko1MSRGaCC2TE8dVjQydBbW1VNSx1vRPdMJnKQLBjHw3tvLGZwsDbSKegJq3CJMR8BZzd94wgR3qrzkCmtntAQK",
  "key17": "55gLUcqT6n9edhM9R3rew7C8E14oeFT7fw9sGQ6ZvN6AnDRfgcc18QxuMWCWYMe6vpVMSh58fBSkh8BV9goQ6Wcn",
  "key18": "5BFySKPUEBCZjdNPF4PEV89MBNSfqLD2UqGJQt9fj6LzDCQXTzwvstKtmGiRSqfVvvdVksvVqQJk52Me1PmmxkKD",
  "key19": "5iq65CG95cvk2UqGdAgqULuwhNVKVqiTUTgxcdbvnEQWSWb1NBVSgf5SvmePPH44q3pJhscXpXF1YfDz47gfTUyt",
  "key20": "4X8Z4sPHPr6eopKw5qpsjSPcDSFZCvY6pBiktipkBuf8oP6heAB5ufj3zuS7BriPYMeDmFH5racPVEbEdnKbLdes",
  "key21": "37kuyjK9ibFJBCazaBAEz9SH3QawF4bhWbCLMKv2ZU7xzYELmsGoScEz6k5y6u5bDNRkqZEtQKGnMjgF7qvMXoEQ",
  "key22": "3FZhoLeEAvmcvpmqDGE2nLePhF1Rs4Xjpbp9hSKTuA5c1gCxsaoRzZiTZSEG58PuJGPe9BtHkyqctfdtoar29zwd",
  "key23": "eZQh6xadmoSqAdNeYgN5ixkRT2XciM4fuzpamJoxoBLmznVV9AFJFNmBJhz6QjXB45tyVsg2HPgKbTUue25Kfjj",
  "key24": "4i2ssxqHW6L1F7LrRLGgoUjoWjB2KudPXFQpNTV4pmyYPf2V78Sj3fjzAjo6WTn4AVAFGW6pFQC1qbdNLwPAPkKf",
  "key25": "2YVzBVFGAzoj1CoAbyTy6R8Y149pifJE3BNku1Yuyc2k3qWuxNi1Vk32EVUb1GLCQbVfZL83oNmdrQKUqUciHZeT",
  "key26": "53FBAdPmjARJ2RiSs3zLwCkzYU5RS2pGdLKRDsQo9NsYeKLSfwsX5zHYBnY7AkyLMniCc6eWviG6xJvBcPqzvN1h",
  "key27": "4XRi4ARYy8dLMPLarsneRMyf2iVUv7HMC9BFLFbGmaD74aX9uyknQznMJE336b4mwUwpBeMXGVbXoGFB14XhpJ7k",
  "key28": "52REGng9zRmTHwRhCuENLqjUW5zd2SgcPiXdmuLWCLizL2n2qAcSseXkT9b7FY25hjdhZ1NLBiKGsVgJMncVwvLh",
  "key29": "4GRAzNMpR5PUYq3V7iF8BzwF4khWbaQ8mydvvnwzoJzwWUvHUW3ZqmqtaqraiWDhfGdxJ66fGCBzWVBjRnFVPJJL",
  "key30": "29TudQx7Sd6feC2sZZyHpYmBtNsqBQ4zQFtDrW6iR2ypU4TvMg4uZd1yc6oL8232hXrgbZsJaT9BmyBXWGa3STzX",
  "key31": "8jH5C8wzgpxERqrgYe8gdr8d2EHh3AGkqyKCLEe19kkV9zHrXK8Kx7KwD4WyAKLDrf7yiDL3fjdJNpXny9GbReZ",
  "key32": "Q6VGqnjucuFWubLk57quCebDbgAkN1YmXZdTzGoQR67p5nrc5JqKtXTi8cGDFvezTR2jeRKBu9vmUWd6pckYaCk"
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
