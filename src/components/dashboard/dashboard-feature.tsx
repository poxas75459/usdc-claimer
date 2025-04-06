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
    "CEUyT7g9d2vno7n7L4bGRxs5KxRze6eD6B39ndiaRw35nzfrHaunqUY5bemhKwzDjuXTu495pGiMQh9G3pc8h3F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4uAVBMM74EqpoyBhN7rAEMjV7JJfvw6NYa9A4XjxxKcknUCSDWQzrQjxexS3KSAFtCMKZBossMPnUysvsbBzyyvX",
  "key1": "3XZA2q7etsNmN18Te4JF3Pt4JP8MUcf9RBma1wFR9vkoGcG7zMwDpZvzjrXH6o9ZzmrGFV1N969xjqttRv3jWmbV",
  "key2": "5HGTeeoddCvjMbw4m6dfqe7wzSB6PYgWkc1eSF83iX1kFQkqXyxb2R66tJneVjtQGPWS6pzJAmL9Q54E6Lm8HdDb",
  "key3": "4zrRZDfjvyp2FwAJxehGTKNPPgwXnJTjQisgoAuncbdapE3Kq5NecVJZQ8t6Y5XsgijM2vtQ9pv5oB14pUThBrK2",
  "key4": "n4u7wJk1iXadZsF7PJkAmpywK6LQHwmtf8a8PjwDj5wHhb9zqKvtV4Ywc3oCWhZV8eZDDNUWERGchJroeSeBeUD",
  "key5": "53urSKuJbosvz8o6XEhSbDj4uitKaXD53fKGJH89hAiCUXQEA1fuKpTdQurrqsjGEjaNZUd8otuqhVgX9ptBYdC5",
  "key6": "34h8pheoXKzcZBdMUisLkD9HSGuVJiNrjApLsNH3SgncySii7MLf3SpK6Jv4F8jwcZMQR5cQYMrMEVQqZWjqEAYF",
  "key7": "4Ssfi18SjEf9rPuhPzk1b1iSfTChYFvHLxXN6wXetUg4xwVpPYKbeY8AgGgZrK5BNH4YcBg5rCGnDP8LNtPSsTr4",
  "key8": "5XyQHtiRkSb1saBrihQrHiYTxLfTMc1VSXfRHSwf8aounVwmxfoByC3U6d7L4dgroNBHoQQiCfiNq7BRVVFgQZCc",
  "key9": "VGRoAxpWRQCyaPQZMm8C8SpVbDSyDyS8V287Kk76oApPx3QRn6zisytdLrm2ZULh3M2eHY4nc4aLVBduP2MJzfu",
  "key10": "5cstWJEyxoyWN7S9YcydeZsD7xndVbH9dojFJYsHkRXymVytKtGgyLj1KvddtSteMad5usnvctyWiJZVwS2nCM3V",
  "key11": "3CJgbdPjQZAqY1WX2EYZXkqcFdpuaK7yL91ydCWhrqEw1S6q2pxrrX5pVuuNU8LVi7tCCpByrWzDrULqXktNbSxc",
  "key12": "3bPjyUGjcPi5zPmFmSZarYRgt9cEF6Sjsg7KojThyA91N2gyyAbgbBjuVPFTUbhR4GrzJ5K4c5Sp94YpToYkwCTC",
  "key13": "2e5H7PiCM1jo4F3tgM6zQnHdvjrBWt2jb8c9w2Uv9GKCxRbxuWgFxBYkoDjzwM29q26E4muqZKMQHzgKCoLRY1uf",
  "key14": "2AogzssG9n5JjXaEbmnrGU1YcpX8iHqxLRZWkYUwwaLCVR4E5FgiUGz4qiXCCLxepy3DVyjuWWVQd3ADyHfYKPv3",
  "key15": "25zWhyUH6NRWCGfEniXS5yitbFpTtvmTFUAGdGM4hnEvATuQFNsgR32Mmt7zTAXJpYT62ddmQM7dYnAZKp1L5Tzx",
  "key16": "5tGcqcD112VnSyrtvWqcRKahyaGjBb5p5Vkhkqsc2iyk3tpshRmkGEJr3UkegVXGRJyYHNog2gefNcFCxgL524ES",
  "key17": "2FHtZX679vsd9ZauFZGNHHT58beTh5pYcP8m2RZGB8uaVgvZi2fsjqGYzd969kMixi7yasLnmyM9hBsgDx5BnBb9",
  "key18": "Bq9vcpiJp8qYaQUMJjSoRaMcQXCNyHiKQ1BPoQCJV5wu6sJpU6xcwSBExc5tKuUf2rDjZUekEYXmDzEENnvnBus",
  "key19": "4yRwxCh9uDqt3dSTVU3pq8UzM8Gv2FZJiXhtXMc74DuJRkL6zcNNniMbhanzry9DcoagYBKL49QSiYm7v4sjnPPN",
  "key20": "54juDX3p7TmYt3jQsawUHGPCCSuTF98AmrFxNjaD6YGoKExcz3ogoX1U8TXQPQHuCLWQrm26kbxw1s2opGYmXq2m",
  "key21": "56oZNCYvoaZWGhvrjvapynH21xzopHjqyv5snocE4NrreSYbdpcg8uzkAAnr17GuJwWnuWtBAvFzNFBYTcreF4n8",
  "key22": "613WFKYGDnD1FY1yVcjQEHTbLbBiPndyjWwyVPvpcyYHSRNj7jYycRgAb1jbpzx3m6Esig81hZ7i5vop7ku9E84d",
  "key23": "2hTHKdj8sCh64TFHADZEGfJSHrGLPfrsEDTbfFn7aLWD3SuGLHyzvS1U8xypbFNL3H1rohPPY9wa2LiFb2K1Gztc",
  "key24": "4Ya3hNoCi4VBwPb3ftttfGoshPwcZ2i6arxWt68nyPryevPzt5ZZE97dyvjLstDubBQUB7WMB6WGRmH6vWEhv4Pa",
  "key25": "36txgQ9AHiEb1XWRUsGwtGGZqDWg7urSVtjDqmVFqejvHSd3kZSKeSvvSR5SH18m4NUK2kmezbNc1HLRZ18NRsUc",
  "key26": "3Ty9AvdbX4NFeuMKKqzKZNM7i4uJzPf8fUMEmXRV6LqvjTLfw1xcwJLEyC3wvqY1Pvfahu2rbGAmccpegPbDPcfA",
  "key27": "4vGHKQ73wgHjevCMWoH6DPUcScWiS8wFMtD2auME21AcZDwpBHQPhE3NjjFGV2mCnakQQEMFpawMoxdXa2MTCbgm",
  "key28": "5woETF4z3FtxDRXKTgrfakx2v2sB8JSh1jDk2A6NYHgAK3kG3788ftB6Z17nxstaw134SBTVL6Ngi86i5hXrMd2B"
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
