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
    "3tTWyrSYVjuKesfWbNpR8tByZENuCmtehLmz2eukuVxvuSzVz7ScGPuHzHQVXdktw7pwETVGULuGck76a7ngYHYM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cfrz1WzNx6ktnn5zZQMZReAigZnDCyLPNbvMb5YcUDAD4WWRsfMwK2WXvVsyaeHxXxSeM85UqBB7xbfJbkqyT6D",
  "key1": "5TWkwsptugD7mxRAP7jq4gnUmE3218UhoxLTz45qbX8CYpwGYcBTWTqQim7fDSgC7UBKMkAxF7XneZGPFKiC8wNZ",
  "key2": "2RS9cJmdhRW6vJKFJpCv7GDD2vGsH7UEkUFWG9uvd999QDedUbRCDxsL1ut6Fc3dmQYn6j76EsBnuEa9gk3Zc8Up",
  "key3": "5rnoaaDJarra8poZSZCTG4BMaEw6oQfEHQka8AWqfDC8bQVK53gXHstBU2Fq8kZghLUG5DmpRcWfGfLKE72pnYAM",
  "key4": "5PggT9r7ESsAgr3EKHfz3HZxXcQ7vuvgJoWLCt8QBKVQUML3tdMeN46KzzJj9ksZ1qptoUVJ9qBsyLvtvkiSTpdJ",
  "key5": "4S7LV6MaDDtHZRQPKsmTMbaHsy7yAF24GxDZ6msANTN4Bosr3hFcd8YJYsgxx3qo1g7F3wbXsgnT9bhvsqp1gaR3",
  "key6": "4pQ4rqiDcBtqp57sifD7HW66BNPvpUMp5dqjAnfr5L46CyznupKwUcxjdfMm7TFanPREXwRprN9bPjME3WdEV2Mk",
  "key7": "5sdh39NdscHJrA9NrVhVBa6kgqh2A2acCb2cPeZAYqGECtVnLMFHTGExUHoFKVpsigdj3wKRhQsBmurUJyp1YcRT",
  "key8": "3428dWUoiohUw3DLYhRSr53ZYAWi8FbWjwh35jY4MPBpvxMqdE9CFARBe4nKeSz11WAxJJxwqpyq4PWBBGHVQjo8",
  "key9": "21tCTgSY2YhXLpT8krdLpBi79uAnbfwb7FY5Eo1jhELi9Ta2P5gqE6E49qzvV68ACCUJBnUSur3bWCT2esxARSQc",
  "key10": "2bQNaRTHc3mUUTj8vCGkicHnpoSmUCtWMsMzUC2kedQuqc1hfKTQvSDLhJypVxmaX2e9RQKjCM3n7Qg9f53514s",
  "key11": "5kZtYtmX25LTgobZtzyYQn1zeEajUAZZZaRZfYTTicf2kXcBU83RzcCEy1umWCrLViCTnqVpJ88syubGqaUYvSvB",
  "key12": "44R8W6gwqULQm7ignU8JVZXN3UhH7LzFxATYDQ1BnjF6sU83kFs3udZSD75yPriRWnPJdsTAJtfSgoAmPd35GgoF",
  "key13": "2w65Mtu8Any3NSm42bU4vediXaAV1FzeXvbp4Ar5ErFf48ApvzyMndyo9Mha2yK8wnypBDpPknuzSotJ7amG9VT5",
  "key14": "5CcqXmca7w5hnzo2VsKTAxBRKyCFMDYmQnt22Q9WfmoeVPpHrrLSLELVbzGeJJdteKMPk64KB5zz41o9X3jFNHui",
  "key15": "5hzthXa5C9PVgpGMxvEuHN47FJP7oqLpcosRSZoyZNCvsECYFkMkmAa27rT4XMBuaVpSeVeKxXbmNmxBHXmD6mWB",
  "key16": "5LZQburHAgxvP2Yoj7WirWikQgRoeD4wkEQ8hBL8rCyZ13KG5M3gPWj2Kvx5u1kZb1Su1p7Kxodi6UuMBSNRC95v",
  "key17": "39L1nFXw6RjR684wyARMEdwXN2JQDaHcS2Vm6VtVGoVKEzvVbPJUJNEK6PZSJZsntuR2CGraEtqDMZYtim9mkrT3",
  "key18": "2zMEFSJ3qtuYvL3J2kdEaSKCTDUBLu8SP6YxK95duqHyY5XyawijFyzsXLrjN1JgSCpMNYUvf1ZFf4SuxX4aZwZ4",
  "key19": "5uvwcYCgH1YYTZD4r3baYD55M9agUeuF8iMjL3JiKXTNkVq9pTQrqgrC87PqaVSGEzbhsMQ9QNTh5zCFgVtmafA1",
  "key20": "4cvhcmkKrKzYubvzBLDJZKAdmqz4H7hfK7bghe5YjcwTPiVaHrnSWnzJiggFpjubraQZh5PnwxVQndYvSqCdvbyL",
  "key21": "4grhbq3haKRb4wPCFVhCQgpKs319Yr7zM9Lu7Aaq458HqUY1E6PeXNdjNX1ac3skF3ajZYY9BdjxBjrfXZPaM3aH",
  "key22": "3ftdgZwWkTW83kC86aRDE63bXTMZsmLN1jb1unD4bxfj5mzTyUpcyQ8quSVXxRggTSYAGJxDkrGtxZ1Nn2xytTWG",
  "key23": "54PUdTRvR726XifuqnQ1tqDuHDf4ZN8cEHNTEkYeNkR5W7AjoWyH2wLxMAkk1V95Gxp1EaiWRoQHbVXxmiavby5k",
  "key24": "oGdLiFvdP2rsnbVCes5hSsfy3Rjx5BxV2gmXyT3CTTsHoZ8CZSmMfiJkJ17h52vJYSWyvAV5LTGm4GmScH1xsDR",
  "key25": "3bJyCHd2C6zYZHqyggGFT1MCt88ya4UDF5BYL9aaVtbgR781ijMBCoX3jT11EmhBsGyoCRTd7cXHQxuoxs3g4sHg",
  "key26": "5iSa4eyVtdqh35GsWEWRQZAWbXXWYdyr6mqvF6UDMWQR2W2E7x2DXJ9RdAjAYjH7qdBCbs5435amo9oc8MELV8hj",
  "key27": "53tQN1drUyyhhRRxj3wkEg4DuUm9UdV5ogCe8KKYqpknXN83stW2tznm62RSpjn6w4SobsEehdYHVek2E5Ao28Ve",
  "key28": "xvvzyjGuCMKyvZsJhTNKw2QQ2wfT3zEMj76H8cwAPVACnFFXr1RVjvBzeZHa5ZzqbNs5f6duofzobZJ9ZLXKsyN",
  "key29": "3uV2kPedEdRV7TwHkXF9VH1Mk2ShNc6ue7VF4cmrGptW5P96FmhWZDDob4RyaxabPK67NiFjcAM2wQi3W1EA6oCT",
  "key30": "5yC2Y8YuzYjQpJcunSYngkuf7CkEdQn5X7xhKiSLZk8VH8J8eBsRhJamuMFFmo4fVGF9Vzcua59ggZSBNbdAshRL",
  "key31": "AzYN64RLTd5s4NHhtdC7wH7DVS68wPXbmyxLThs6nAhvE3ykzYyxmNLyhEPE2CdrKomKsQqdMGnWxVRhfMyKGLi",
  "key32": "xZr3CZFJh5YAgkqEgVvRFsMjWKJvqHY9TrewSa9GQ7w4vnGgXDXpjH6QJxShUVNw1RL27nz4NRFKsrDLEWNp7De",
  "key33": "3cro6xcEXXCPt3d79Vi1yjxcckqMUUnQzHwSrX4U3eShK6VZ97hiQvpWzMJw4fmAKjXp5RWEuAsYN9NqDCWH5GZ5",
  "key34": "2ANinKXv5MdYbAEVyzDWoPc4dZG29wioS4a3cuL64WuEgxpg5YScb1Edu26feX4khLvcTSPbc1SJhWrmQN5ZtCRc",
  "key35": "64sTG1DauFwq4qawyCu9M7Av8D9RLg4wWiKoqW2BjZreN8c1yXzYcuqyaDeYSENFPG98hSHvZRS2Z1AXcZPwQSRQ",
  "key36": "2XQpWNLnWG7AKrGHM1KxKm5A75DktiuSoupqqz3ubkHf1RUbgyLwLV8eeftY2u1KL2mLLXcEUDjehLK8goFMGLJe",
  "key37": "4JUXHpNGUmL6VqgnfEvEwGvGY5vqCD67d85AnmHrGSoRNLbrcQcHiVHPMEBeoW3ghDumPUeBNo1AjsLSr5o61bTj",
  "key38": "3kk2dk3eoX9DWDEa5bAzdoLcqvbyRxXeYWmXNbvkwJ92n9UKiiuvRFuBr4b3KcYuMW8CoyA1ur8tMrTFt95xL6DV"
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
