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
    "5EcmQCFQGdaQnkR57ao2sCi3EuKapnP98Kq4R97hDzUtJWvNdZHv7sExN4646XkwUzFgTBJbDaNQZajdURturnLZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56iqhvcj89CcPtrjoN9jZ6ueVNPKf7vm7xAnXfEsXEA3jAay7AW688Z1efyvTLqXBFNRKXcesQ3vmpcphAkZzCWe",
  "key1": "4vpzpij2zbQ52GzzUE5RmzZzk6Non7GeZ76aet5ArnpATnJG927QL2kjRgaUas6qrYNWgDuUj7A32jVjgBasAf43",
  "key2": "3qHyb8KT38gKjS7po4z75sXrcySkar1bJyUkLbsWFLLoKqaRqCDVF5apWau1i8eNP1GdS4vVXsKgkgTRevKSbRBP",
  "key3": "4DxwDE4pobuqdN2Wwe1VZne5jZsDhtP1K9myTKN5pbdxxQfDtGpjJgKYNK7Ud8LQyep29y7ot5YwhzXX1gu2RquM",
  "key4": "4YymYjMbKDqv66GX294Y389or9pu7EQehZ2qgEYpPr1mkP2hnKjBRcmVKhKooteKRwXSYAqVNqVPQ7ZJWntnSsLo",
  "key5": "4DAwQTFojygJSvmxS6a52xd7hzFqYaoP89SD3MSXwChAW1JDdTF7DCHVXK3SPQQL5jCYWUJHY8J9RXpDE4sre6W4",
  "key6": "3y3qgXKKX2oY2WAzMYedMciz1D6znCBgdx2LyPFUbMwp1542K3zJ1ZUGwMfcuP3f4LPbJfMYSwywtU3XUY4LV3qZ",
  "key7": "AxbJnQ5v4Q44v5vZGCEdgXQKJy9aeXJDpQbnjFkR2trvGfwwbakRFeSAaHxhtyHCvQ12KRx2qSrfLPwCi5BaPxi",
  "key8": "gJCtmwmnsLgW8rh9nHihN6dDo2bB7py2KmtojhkhCU6m61qHmp6b56xEWBfeP5r5qU6axoEvabgPMNtBLufNfbx",
  "key9": "4XMbv75ktYfJhPaWULg1MNFfVCJb3yXD2TyQPVJGTencyik8acDMzTYKErznpCkq9dZmdgWcC84p3hVEq8ozdSh",
  "key10": "3AKXC6dkP7ATFhwuLGE2UwMq6qHaHE4XybWtLny87rGCzjtWfRhWn3tZPD27513TocW3534cW1fx6ZMtF4UVzPwn",
  "key11": "5DTPcgLRjndfKxpF2zGb9RHK4udnqCqR9JAgQdm23N2JPNh7pmyT7uyGBzMYTFPdKpyghbMjHQat3RSq19EZkXys",
  "key12": "4R92U42n6w5mENibpcMvjWdoyR7gzW8radKdGDshGPE5PBkGu7KnXdfbtxsPT8tB5omtMPTpfPkp35AXyweDqaDS",
  "key13": "cBh1G24bPBoZ5uink1s4EmXEvhNY4VAmTfSMBFxqYbxhmNzJgaYmGw8MDMUpusx6KusZjsedtvCrnwgmrPAsuxw",
  "key14": "5MzAyQygs6LRQxTakYWuHJf5L6CXShRB7V1erhYU7sK8p14aVXp36yuhHwAHTVAWmV1cvgz8vJpTjJeKmjmpK1Vk",
  "key15": "4BqWXF1GuLdq8KfwdDvcyqNpQ2qUEViSMpmn258tj8zE5X1j77pMwWKLrMNWqtBKUTKTRjqcfNHCDxsSqpU3t4Vb",
  "key16": "34fGCY8FPXSD5Ys1HMzMJiT8PSWdLthPkuEwUFSGiuvt7dS3THhLqzaUFo1oS2uduCD7P2DGrWKgoL32E3rFKaKk",
  "key17": "4SxWDCGVVqjoXWphDLdRRP6g2oK47dJvTpeKmhMCy6nugnJzsG6gwV8FLM9WZhJhrp6Gk8RXZ6tDTDrNfTX8g1ji",
  "key18": "5ywGHzN8FzsLfJ5fQsf2kQMQSQYrHwPbvbTgvvUsrqvWiYAZqD3ek762P8SbZcL3X19BZPQ9kyJebiVGzHHcGe9U",
  "key19": "4rnWBrkgm1AsJ3p9or4vrhCqSwTNEM2gDidQ3NyyLSpaffgJzxt5qZyMtzpS3fwXkkGL9f8XC2tAx3bTX2yWw1ZF",
  "key20": "2sms6yCaSrBBmqS1Vss2qAjrUmr4B2WVsNckxXZNv6zVMX6LhHhTgtr8unoRzV2sjPPcT49dxFuyia2fHVU4DA5a",
  "key21": "XWEfsr4VKhNx8gPKVWxxmKtW6GXqvuruHpNVgvfgSSJDWbis4qe9No82wnMd432gCvxCHP5YgJsDyzdKmQkXj1E",
  "key22": "4bpfZ7gFn28q3PkkbqiPQv2m1tPQj6mNKfhDqbvwB5khZPth1LV2K55jAFQceVrNfm3MXuuM9vCyXpmXYjobWtTS",
  "key23": "5bMf4K1YTGWtgmTRztt6r1YJKXkFNzwWVmuG2gSn3X27Pw2K42xknqfXmK5tJa58FqjzHx4FHAfSCBffXvUSe4Kz",
  "key24": "3cPo8CBEW9rWnfGUc6zNH9M1EtFSRFERp9CpKXKEyRZk3cGr9bDZstKvCRkUhwZYcPNfw37tCKdkJ1Eiah9PeZrU",
  "key25": "25TYGRDe6VPpqqpnUjj7ePAnzLzM8JwoqdEp9iA59WBuMprMP9g48xPj51dh5nRc5H74dqtFHmqFe5KU2fp1gRqq",
  "key26": "5BNo7nu7qKtu9KwiCF2xgLjFE5SwEg3FA4kqRuSBcpLqfSwrwdg1dweromg1Y3AuZ94eaiMpPgb4SZnUKbBgJH1a",
  "key27": "4fbXatH3VDPDwAf6c82r4cq5p7fE6Ve3QvQ2shQSdzh4uAN2gzZ87WDpyQMwrTA9ea2KE4ihgg3frcAG54RJRFjL",
  "key28": "5ad6S58ewDx61AurRbGFLsR4jRB2has3PsocVzVK412tR2AcUyyR95jKs7jJeRRieHVA3HTPXx8kza7K5MApB3Pz",
  "key29": "erdcSgXFxpz44xGvjoDMHx62ycq1FFotY8D7iHU6ouWYu1bm2EyUcvQZ8bS6HifftAmj1GCUDjBd5sveiYU4RDZ",
  "key30": "zNp8s7wHq7abbjgKH2AiC6tRzF8QmWsWUzEAH2rGsAvd3Ng9hxz4fAqrjEtwHwesWUqM47USQmmtGQMk1kMKR8P"
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
