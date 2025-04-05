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
    "pcHXt9B679jkyeZzjWC8ZnVjyw1xXnjtbhHKpAxjmFEdbgD4HkHucRhxfy62engQdQ81ZweeBCE1gJgc9mDMjFu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3K4PEB3effMXKJyfbZdXGiQeMeLuMTScut8rNFcZ1M9xZR3fAFPdnse2vMgaihnnU67v6ubaGF776QdtdV3tkbqZ",
  "key1": "dvTAxVFkJjJbeybr3U1GngCbt8vi2MCWHzJsuLEBoUdJ6nx3R74xWU2WZ6xbxmKHZCkZFmrYSJ1o2UXahNCMukc",
  "key2": "31pQTv3WuPzYy2rinisoo66ZYMwgY2JSGAyjF5RYAT51o4kSq2sTzuzoyL1sZtPM73NnaDy7ucHyFUmR8JXR1hXN",
  "key3": "4wVjLhezr4uixdD9D63fNN8qNbpvMiwHUfRfKEAhFSt9NvGV2mLk7xUweQfCVuTu6o5DJwUVCoy1bfHX2RxddQJo",
  "key4": "3xubWfgGysm5NQ4Cqsv5xVS7wpHctpgw24DjK93Sb1941BtxCRzsTW3L1W6ydH98SG6Mz26P4zu7sPJev3hi8TAb",
  "key5": "SMx45zWyP3r7gz9QW5ReCrRBubAjnpwMh4hfY61U1vyAKdGLtdtpdZaVR3md7KwjhnZtKrBKzFUcwiAxFg6axXF",
  "key6": "3AMBeG3k7S5yQLWPQHnq7PZTvwrJLNN4ynLf1KXgXQXFMoxMj8b6GCzhSqrxsxAttozLDK7U8NQ5wWpi5Tya9HQi",
  "key7": "uaGBwNUWMUq9cKfP7k9LzMbxAH6zewLDCoBuuH3LX6mtKfAVQXrwif6bYNMF3LEhzqytGB61AjzLoTrTLBWq8Nx",
  "key8": "51ABPaTLeHqPVuQ8a85WQXFsasFns5G8teAr7fLyvGHbYxSNkv1jSQdZjVZEVyS85gePze14hdeRyFmdu3hBEcc2",
  "key9": "5GMhtKm8xxzSP1TfRR2bBYALMsx4ZG8uubTvC6TQjaZ8Jg5LXA8V3es35269CbuN8y1oFz9RqkqhpHSGWgPH2Tqs",
  "key10": "5M4R2JqLF2TxLovn2KYVEeLN3hGPbAcAwdinVgiVJXD7t2QcxYLWF1KLmJGPpjCJzv8DhKN52CwTQuBnqCbnmES1",
  "key11": "4t7KRxwNoVx9XRbncpMwEhDGU661ygaXBjGTmPyn11dog5uQdnCNvwp47LfYHxuhR41yw5f4LZEvzDpDMvB1LAfo",
  "key12": "JyahU2ZMwYewmF6W7WsW2YVhQBL6biYzP4DJY7L7sZkh4y2PVp8cAy4TcaS3C1UvhjbE9TPP3YEhPnoaSYexdbm",
  "key13": "4JkzaYU7W4NhJVqT83UYUqPeS5rm6mUzQHQ9itCjckWCgcYDgJjUFEKmxJ4kDxksyVTQy8t7JNPQLBR1j4PTyWSJ",
  "key14": "67qAEZ26NL1s2bV5f7cEriC6rjhoCFDzYeK5H8sw6BpbyaEwHcgK2E9tbjjjU5J3RGgitoTBuGzeH9ZDvAEwWVrn",
  "key15": "QEYmFLcTMZbFAxwK7Ek3XQJNbMJjpX5C6Umo4pRrcUdb41YZMHVPCN2wGh2CqJFfT3p4cLsYavpWpJF9rPMS1yS",
  "key16": "XFX5CayCRRPjUb9RYrfY9gaKVoBpkLL7Gn1pyXDSRygzW6Y3mbE8vv1aqP8EpyDbCKZPJRBQtgQd958CdkxvNti",
  "key17": "mEiZnhGiHs8ccubY9T1y2MvoCBm4vWadHUEiNsc2p3DKkDwYtmX1Fmu8Kve5Dv2U4u6BrnQyL86pLVpK5V2A1jk",
  "key18": "2m2nUr8g3H1AznxtLKutfJbaBe3yEKVXNX9Sz9JDcGaND9SmJQABJZj394vXu2Ygzm7XfXuD9C5pz3bu1nvZLuWC",
  "key19": "3fjq9bFuLyPeteHuBZRwhQiddW9qtyCJtxMCL6CCN3e8nY5X85kEULvTqgv7QmeuA29qTgxUpfR56B5DfRMrD2UF",
  "key20": "4he75YhFkKroFur4WDfzjBxzRrV3gejJ5LUSp6VCLRPX2f7QgMh28Prv8Ban2MF15gwNeuVF6uU2CZ5SnZ6hs1zv",
  "key21": "rdUF3W9rxD96WYffDsy53xpkwFuYAf9wXzJcXGFtZLcnM7bu1mxf3iamqU1cHfQmfgj9Zj3C1bc3MoUFVSepLrA",
  "key22": "354fkff5Ks2PQgttuJe9ymD5egws8egzXFg8Zmw6vk28CcFBoHoT1Bd4kH6Ym3k13uauPksD6Bckcd69pkeMXYsY",
  "key23": "5hoTDHKr29A8nKXsyCmxHrpVYimGwaVfBUVUSM3DURFZA9kzBcJZYjgkmDVQ9whPwKi7cLQreJf9d4RgU22VvKzU",
  "key24": "5VRmHZ9RSQdfAoHpDdHRF9XStnszRgYTcRs4ayUktKYegz6sRoCH1EvFGGhZgyZKDV6251DnQtfnnwhSs4KeLSYc",
  "key25": "nS4bcozkArXLQJecZ66RLSphkjrggWwfHgDaHP7X6YEJZqjj91ZxWVup2eFXpFUezYj9CZAVvi784KEGbhCjYXp",
  "key26": "5nttt2NmQPCZqufLhjrS9A6xe11PVuiRxmroMe73CWVK8HsYyRv5km18BhRcamMYPhCkCmnnsW1p9z5okhQnP2uu",
  "key27": "YeA3Wr79aH4Va9i76Hfy57HgyQ79tmsRZZJtwQkinJFmZXCnTAEbYuRg5JcG4vLLjFTF17R1yLoRUDGzvsgotwe",
  "key28": "4qB5AWxEdKzTQYwqGDr8qM3cDsheBAg2haeoaq9mUuPGixRKAP6gwQ3Gn99asCtcUSY7syyBSrBFwJkPHikK5XdD"
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
