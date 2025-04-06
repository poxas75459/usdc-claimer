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
    "5gi9kXwiA9W8aXDcJ2HNoiqLwkKYa1MEDxCkvz5yrLeDmYPTXnVveVc6R5pHPpLCqAkvMRUox3x6psmmUEGZJEqM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5AZQvQ2uekovYPQ1L9hxyVk5PEdih17j8giHDWnX52BVGnCyGnA6bZcns9n3o37yFyNd5rUTu1w6UpPmuhn2wWXp",
  "key1": "4t1xnae4WiD62rEBf3iDJKNapWu44fC5dsK22x53UYcDEy6r1nhoHK1emegr5iKCFnCGo2Va7HXVDcAyrNVw96ZP",
  "key2": "4kK9UgJwsuH814eeDGAa5T8ZbgfwfDRmXDDz6xZzxnEETPY6Q9sVLJNo6SujKGKnxV38znT3wQyRATP4GpPuQTRP",
  "key3": "5RrBV4LcBEFvxGtv4jS43xPiTJcpMJq27ie6B3z7yZQQVMSqGapDB5owXxYdiUgtC361K564oJJkCBVDRzW7s6Lp",
  "key4": "3Jx8YN1ixxovEtsAPU7mb8eKS3keK3N5yHeSZx4Ld1A4aX7PutJ5MQpUyLhs3rngNKXEsfG3qk4GHPANMwV2m2Kz",
  "key5": "4ymRrkBHZoRMg3es88PuYrYx8SwnEmkH36LssEC86eaLVGpU5s7FteUC8AZNHMp7MGxKc6RzKzKU4QiE9FyhbcT6",
  "key6": "4wJpxyyVMKqw5DFPwPEh2Q9DpZi7N1x4nY99b8YJvf3YFw7Nvu74onu7mE8tRoSLappfgmjTRgRJD4pDyJde89XV",
  "key7": "cxAGRNr2BmyvjjzV2dpnRzFBLtAJ6mfcxuWzUFbB5gwJZQjodvrEQYB5r7wN74x4dzJ1mpE5tuvBT4uHzrkye4N",
  "key8": "2H28E6uKmda36ftLPAQRCF98y525iTYAiodHsM1sTMrmUesozEiwmSxGF8sy3QzU2JowEKZHx7Lde1vabBtTPoo",
  "key9": "4nc7X5YawudyJ892qGVVUXYJm3LPdBHLChJGqooXYU2eUE7swz5CwEQ3ZLyGv45Zo7ivBA6dYABJyFFPLoqjCxmr",
  "key10": "31PvAD2kUrmBca1rjmamVGWooFbxyNScd9vEnGiQmnZpKJA9n8ijhqpwAazDZBGzHE2xmrpC7BGJWHK3DjcUQz3A",
  "key11": "37EMREfAbUvZwPk79zgpzoRmwiNFzMBeeUzq1jKqi6Qbqj4EkKw1wAUXfpA74nrxu6u7deWjhnjt4JUCXdZbRxDB",
  "key12": "4mrKZgyD4ih129W5DucjWSV8wcpD7dSsCaRNVVFJiv5748PeowWg6QBLTJtD6vv8HULcr1woikHPeVHgaQbL71bJ",
  "key13": "5rib3nbBbQmSGLACETD18RECzeoYLmXf1mznyLXWqVaubbWodVwEt5ehhWbFUji7BtFxwhP56RTsvN775fJNCqei",
  "key14": "2kvruV7W71wy2byjFeFWThqXQvtGvBY5BPNg7sTQ6sWUUAHBjgFm4km6VoACiVXnSXpRqwLy8wJW2Z5bAZEAe7RJ",
  "key15": "iF9yZtvgCHmCrcNrAt1eaouASV9zZScVkqqkm6EMFMpPbXmH3ceEPf291rFNqvyBq2bCSKM2D9uuSzFiH8wL4eL",
  "key16": "k1ciAz5QarbmGnVaQBkkRuh9eNLWnkTpCwenBvKkfdXyzLvL3vjz4Xm5g25KjsWDdPT9sC19wYNbLML5WzMSqbJ",
  "key17": "3dLCC8JLkD1ndUaEnjX3QYBNBArX1Ws31iSCiRnSPSxHM84VWTXDrdqUjDNDAY39Ry1oizpDDDwKiJGKcXyQUbK4",
  "key18": "3mpAvPDtiQkFSVuhrDGRq9CkS9x8S4hvh1VYrdVqp84quTRn8ma6qoKFKQqBH2B43fdo83nRT71CjZyh6nt3Qfu9",
  "key19": "2ufkvfvJbvCsTZYuLL5ENGuCF7W1uLUE3PCBehd3Eu5DYtVyQ7jvYx74e8eUxv3AKnLbdtcfUTpWVgKSA9T7gqXw",
  "key20": "5tscqijsmpxDYZd5Mzbckung5TFNsoHyiJCjtRac2t8HComs3NHVFJtStkHGns3xAmYRFfuBixyE6UJ2RpeVffP2",
  "key21": "3P6SJV6x6x28V5JCoUBhVM1yjDWSAtwNQueGNqBN1oTK7DDhVmq1zaqFjFZRjUnKoscu9PYd2ws9KTY2gr8PMD2L",
  "key22": "5co4XhdxJEKkeKPrMLVpDbQctnXS2GwTUoLmZk17wxJKsPz263o4NZG53zVJ5LumeJ5GJupGYSTNvw4yjcNSTroX",
  "key23": "5A3mLDujsuBQJzbCwY5Gsv1WyKhpuXNMgB9gPKHnHAAC6dgwzeqZioEE3GxSPhsqZRPdGdag4WAB6cEQEevZuBHF",
  "key24": "2vWD6d7g6ReUHGW2yTiZqAMS6Dim5hYWxfx4Doijm4eRU3ZnKtCePjAt7uBBtnUmMvxsj2PmjxmqKTPko6JQBcBo",
  "key25": "ukujQ8MfybRumRq2wTz8vHJAtUbmagnExguDcBhUfwgNkeqkTc4XJAipZLn1dgNnyhLgqj5PPDsPMdp3x756Ba5",
  "key26": "2jbQeWAqGNFMTiet7QAKcH5qK3cYJJbJhuStWnnNr3FbomrdXSbs72jmxVjpLA5do8m55rFx7wW7nJdoGTNmv51x",
  "key27": "4GAyu7pEF9pU6kMBExAxNyhC8hx8641xicgvQ7FkemNnPnpERgKgPSYByg5eSaGyVpMfUwKajrvwWajgMGXMhuox",
  "key28": "3ApzKdfmVCh9wMorw7tMUtFTqGSMmr18xUpW294DDLZNgXyMT5mmf1pFUPTvJCYnxZU73F9CHeLGrFzhLNyzVuvP",
  "key29": "3Cr7KTEeZsrpBoqN3yAYqHyjuVsjWbuFJfFCgT6uxbTnXVFwFvGQLsjo9isqMZH8yG8YxodnkPbALMecs7wMVnM",
  "key30": "4rHeeHRkbdRnCfLH2JkNQ1eLruVqwk14rAWWhbJ2Eid5ytZf7gHqZPQNxpnsXe1fhmsdBcAUjDWmHiWP4rQHM724",
  "key31": "3c3YggN8PHTsJN5xSWtuMNvUCjxLAKXkLtJXxXCDijM66dthNQncCSmd8M993hpgcog6peW5cHnSxnY4vFLhYoWc",
  "key32": "3iowB4hjJHNDHvUtE84yEG3K4AH1zZSQd3GrQLGygyCZp163QEFuvNZJ9ws7sadxofuoUVve82BY64kacWRYAjRo",
  "key33": "3VDQth1ZZFHQzCfRVXpcPrXvXvQ6tcPrqnBGtpfxUK8UuYnzF1VvJshzQJ5maCKoMzpPUXBXZgzMqL9zJuhAF8A4",
  "key34": "4L5QfkR368wL5PsSUqYXDBR6n94sCWN4VwUkw177AGtSh3Z2LxcYFJiqpVexCyefGWdtz9YtRe29yFjnuf5t7AfD",
  "key35": "2FMqzo9TgMEAxyR4w5NQcc1T5otaRYp7dh2VKSFQ7zrDP3TctnvyJ7RXPszR2U6mpk7vV5qA1wH6otQRG6rudwkQ",
  "key36": "NcZtGSqxp9yGCR3rNzDL6YGCSrZA6vPpEsDDGtdFRZktqVVJYaFPEPzVyoAhubzwxJYjmbZZMcD3Gngb5LYxD9p",
  "key37": "4PYduLNsoLeg9zoYS276JhM58hGwcB7kAV5tcrMZDqzSTh8WhZTsUihPpRQLTSKyg1pDycWnLJ4CRa7CQfR9BDLE",
  "key38": "3gbfbf1TiekLMUHYy4Ro3UtegsJqxetJcsj4v7cidVLvANC1oQifMPxNNuutTJtuCb6J6fmm45mVn2ypMe7YLrFU",
  "key39": "2u7M7dAZ6eGi152zrRiFnYdZ2QHXk5JcR6PNxR7i62AcRgLWwh21J1WgeXEJ7so83ivy13L9dP4RyNCVnwhMLxRy",
  "key40": "2qAyMoYLJC74MdbPGB1VCMiDiC6nCTgv6rStjUa5zXZSDx19vnoD1PJsVPY3tiywjDMht49hENGYZtvjagqA5Sov",
  "key41": "2NSPdsU5eT7FjhcUAeyAGw3cVPATLFRoGZFbShJYc4LAkNMNMjpV9puUzwfit7NtT3SSSn3b5hiZps4DBd5sgEyq",
  "key42": "4CWKJZijm8asxJPBdoa6smtKrWLpYFBpp7RD75Svna86A68uoZMMAkuWRXAk8cxQXQhgkmLRmC6Jgch2oGoeo9qA",
  "key43": "5Dnbae8sb1wKLmTocRPcMMrXdiKe21ndJzkqFPtCHsK6keCjGBxEMBh8yuMf6tGPHuLNt518BKSQEsArKP4u6txZ",
  "key44": "USxtXiFhcfiLZDibfN1vyceWvnngBne2PkPND9a2zrgXzFCDLJUwHyNm9WQdc6Nyak4cggdYJvnR5h2W5t3hMJN",
  "key45": "5ssQdudCHRqkadki3M4hcn9KdF3sRJp7XpGE3pxCDUUmT9nzgNjaAP3hsNhrK6DBKTQDeWkXLFYn3i3p2GJz3jRV",
  "key46": "DX8DGVorRD1KekJ7mfUvXFVP9n8xptBTRgv46fwuV2DbAuP233E2rzocSWvXghpV3iUZpWEXtWj2evqd15aLkWS",
  "key47": "2JpzA9fxYz63XFWx4hXuMrsj3maFL8HRU8X8ED9whxshFMGQRwouf9jM52YZ3DvxS9S1fsnQbpRLvyLYsQpnqtca",
  "key48": "3gwvhu2oHbSNkfwFT5fcTDA8qYJeN9QQy54A9HMKfKweFH1xTqXgieUi8Kp6mjb6ALTfNrFqkowbCa5D974uw9qJ"
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
