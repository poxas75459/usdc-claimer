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
    "5sDaL7TqZsMZdxNvVJjeY9yJ89gH5Fqkyt5CfGFcEBm1ukixdNquXQnmgJoWiVwu26x448ghzQX4PPC6DzKsD3C1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3p1vu4MivsdezBym6CP41oTL799JdLX7a1he7mNZvMK5K1dAV64FbYYXiDzNTD9HkCGLmsEBsUR8eBBkZY5rffHL",
  "key1": "5jGvJtgV7xSxTE7t3RWj66y8taJVQoKsT7TZLdnyVyQCLRQ9JmNUz1NtD4JEp1dmjRWCnbRuJ6TNH9yVXFKPUSNy",
  "key2": "A4dXMvq3knHnxjzBXVaKPLr26FFLWQ3aeyXK612N3mgAbn9WSXziF63FmxvvsYLUUXFz9UxrgL37ojPQUzqav5x",
  "key3": "5WL1wYJ1rJZsbhcyGKnZpu1vkLMihqHBu9WdbvJaKsj3V3PzVXEpcoW9ngqfJkURecwLYu7TJ3Kp9Ps3siBRHagg",
  "key4": "5FFogmgV97kuujwji9Y89JHtV1xv2CpcHrkidHM2Cgw7ciMgHuNXjAoriDnhU2u2MKPDDfzH94bWqWFjszbMK3jw",
  "key5": "2MbdgTXczo7pLDsErhsATpjFeeRxWQQ6ksg9ngYRjD3BsCiS1Z94YsWvdkJAVCesdVJmkA6q5tkJCwKM5oR76gyM",
  "key6": "2ssePxJKQRcKWLYanZ8tdwEohvrTDrQQN3svcrpnFNMoGGTtdXDg9SNJACuTaj3TwLRQaG83it21xdaTJin76wGs",
  "key7": "2mkPxxu4kRTvEo8b2eCeC1efS85dE6ZSNNUFnqs7ustZcctLeVP7B6Ba4VFzSNCTVfe1Qw9N82TabR5fYvivJPCQ",
  "key8": "Ej38h7ucPyjoE9JKH1WEowcTp5BEDbDkMKs6BFkNKYH5e8fmuky6fRaDHmFjENjk4YxP7RnFoMFzA238MyDM9ad",
  "key9": "5KmHG1zxU3mDixsqDtPmTzxkDnkWyw2w8qWNcX4hkefBGyhMXVcfchK8tnXiw8sQK6zRyCinSgU17DY2kg2T8JAC",
  "key10": "3SCYngGUbghy4RXecbaYU5nxJW8HS3585bS4HN1DLPjENU8rbZP6z9bYpQAB6PjHjxmnBBSLCSEqddfu4PnWzsuN",
  "key11": "3h7So7iPFwYujTkUVwGmuXkS6QQm3xkdmM5TC87p38ECiP6K2zpa6nDx9bGMGCa7MY9aW3uVywSDh1BvyPLqHhCd",
  "key12": "2ZqmQzoqbACYmD9ZLkp1AQuWXtEXygJ216eucBGojKWB3mA14vkw8Vzt8aPQynFyvseE2fboZ8ZDEP9DUHSrf5iU",
  "key13": "2u7UFG5kNow14n2RCr2TERQAKxdkmNJpttKw3ZmGCKdiH776sWGBLRn98WjTSSyNUsQgLmSdLcofKxt7z9mCXKXS",
  "key14": "5vqtRShXauWYZjcT111fqbBhjrZQLe76sarZebG4WG8A6s6TdeToGcstAueAhPCJGLqLkhkmnpewDGqprvi1mLEj",
  "key15": "2bCSYfqXY7A9zN3jZYNugcojp19PoqXNPF8TQ4Skg78sCRJBQZYGE7LNYTrviVRoTbQiwd3PnAFr29uNC7kzyahG",
  "key16": "ux3y1mVsCyEZCiNSKhJ93itvXqyMSsxNx6qHrfygomGGUG1NZEBEDycEuCqgXGUeBqFVu13Jbp38j2PD9xnuCRD",
  "key17": "3hZsWNVw6SK7wtPccAgGdg8pKxZtUmTKPe6WfepefKHCxxMj7tGvaSbSRtpoTCgymH5AiN87Gkh3XCG1ZF4YKrMy",
  "key18": "4D3jqzCpxPLhJo2G4LFXjsSTHL1B9jJBxWQkpUh9UEY7kKhPLsdupxbE4GUxFwuWYKAyUVhviTy6YzKeLAN3zNZK",
  "key19": "5W7AsZEvPBN4NfqmAevynXs6DSwDJ4QFPB9q4K5X4bckz6xJ5aEyWGRizeJBCfm3RodjBbDBCTzo2SFyDfb28g8D",
  "key20": "2cJYDzZv8VT9h1hHweSwrAd7rxQH2kgxmEhu9G6EsN6Qpb2rhoJkhD2TJCSZF8nBtQTMiCyzPgAAZNUC5ueNWACW",
  "key21": "3H9dsKiahpuFMfJ7ahTzPf8RzHchWYHfxC5nkLaAwiCwfHjutqMBvtwopuEwQGTS73nMZiBhAFCuR4tZ1eQBf8SA",
  "key22": "5TzNeVisz3mdFnAUBTub8PwByDeo9VWanPkDCKjySnkP5fXvcqJPJe3cdrXCdNwDd8TMD7s9zCzZddkEMLf1nTJo",
  "key23": "2evjsVP41xBhNmRemcMotZGohyfBye2XejriLBPboKipPWcVYp8631rSChgsVGPzb65fJdAXeCCeptpeSjBZSstc",
  "key24": "2SYTDhatedpoUPmWLJHDcEozemXB5LCkNinTkka1tv3Ub8RQ3quYdDpg45nXjGmSFfXXGfRMZK4fRmGH2Dx84w5q",
  "key25": "4AKFBtWZUGbN4G81ciDKvU99Nfy1VhTw1xnPLnBWsUc7ie8bm59vzTwXGXagXAEDE9ZTvfSHuvnp7GJX7JLdQ5Ds",
  "key26": "62Ahds2KegpWZHvPP5zGT1My9LzvUprkpJ5Taa8T6knaoRbgp2AojqNmdx53Y1TSo9chDtZLhRHNqSEYoeaGy2A"
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
