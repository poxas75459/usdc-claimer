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
    "z5gvjnqZRrC8S1toXwjYqwMaf3HGxJVh6x8kdMYyFajfJEkf7o2eBQGfa2W2mpbbhnTDsHNH3FHJkyq7i7B7LMQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bKW5Zy1fkHKuMN8eTX31PX62E7gCRTnTgurR8mHy3VkoVXEZGLfCfRuPd24oBKsWQjr8jywUJJgxEPziGMP8EU8",
  "key1": "2PALaYHVcCcbb8HJZDjuqLeNDCM1U6RcrKJoeiA6uw3C6noATHAfjLLhG95KEDDUsCL4fofmhZGVyJyNznkp7UzH",
  "key2": "4kWH4bZ675VaFWfbwVaR1hiVCNSX6bJh12xsEz4whV2FufkX6gfuaTJ9E6DfqvpAJJo2wSFxuCCGinMDPvxBiFSH",
  "key3": "5t14YC395GmKFwJFxz6dHNtopb912VSe7F3dNka5mjisudWDVj2PymtJ9irQsEF4ndGqpAWhAffediPFiqxjxVu4",
  "key4": "2Lcj1CUmfbhZKwSk9WL3kVe8iqWX5AR9jz614vXB2wLe2F5n9Gi3h9Pwjn69xGXdxBTrworAdGAXodx1DeXFFBsy",
  "key5": "2G4nNBaFbKgQsvtGyo3nkM9PwyMzUSmrzMXAApnChrNirBpgBJzrwAzbzRLfD1HN913msM8jnN1mhuWhEjS179Nu",
  "key6": "3eH5u7zSxzbmei3NFgGmFmGhcEvcKKV5nDxEH6HWpSbepJzVxnn6ydGKMUwUmfQcNL1vvjG71vSnTFqdxXBRB2EQ",
  "key7": "5fGaaswaxMPCHEwi3Yvz6rXTND6YSZvWpVkwoLwVYeihQxpAoeCkpAo6x2nwchwR6k1kxTw1uYmpHZMXeaJtzt7u",
  "key8": "4PZfkmLHzTPog25XnxMaAPMp9KEwuGVT64ZXPiCRhRCkX9HQbM9r2LBgkTSy8AxqwW9bLfqbaK6XkknX3oxHs6Sb",
  "key9": "44Qe9bFEGx9omtv7tCwU4j85SxDjgzg76srGFK8vFzBBwiAM7D8CK5Y5JXEwMpVh117eTF291fiCQamnMBBp3JAM",
  "key10": "G2H755udT332oXzxMVmThDRZSpxHq7isBvnvPBGVD2XHDRmstVqddD545zfoGUvw6mY9cgbxjGo5ypGFbCahoF8",
  "key11": "gY1h7ssCKHnaD53VeV7BiEbJEhj6Qc3UWAEPThqTb9U2oXnMRvz3vnpsGzNSPyXnWb3XKM43ubGCLd9Di68WkL4",
  "key12": "4L3Sv1qRkeHC89iSLM8YKsZPQhmYAKr4pwGN338ZWKDiqeZNa47MRLmR8jeFvBSYQf5LVWwDvZWSeAa4kdgMiRWc",
  "key13": "en9XeVhz6GAHRrkp27pJBYm1zRBdKrrTJQGiN62CP69qyb1AGzP3tVr9XhF9eLdhwRyMSBSUXvweHZdk2HdJXFd",
  "key14": "5ueCwp8DmpCPpUzd7aBFagGAQqxog6wyGeogAUxkbAyuFVbfJtqxnQRxe3BZkK7QH3W5pk5uNSVhVQE4F1udzeeR",
  "key15": "2TBb9XPe45CKYNrN6pc89VoUhmB9URKf12kVsNyevhBQEPMnSrRNtBbncAwoE52dfqNQ31PfZUW1u5PJLV6cF4eG",
  "key16": "3boaBv8HZx3nFyZF2uieXzzXpjjN9V3H2JTZJE4tMBJCgFZ5Sowz76mLBJeQKvZkqd1741gdacjbU11LQnYQr9Nx",
  "key17": "4gBZXiJhbFt6ePJFXFxnJWzhvsGzA83o2vhNHahKgtTzy6xjE1sFLUm8RSk2TUmtY3UchnPV4iC6gfRu5KANhxQr",
  "key18": "4gZn2Efc38CcWxybzkXKqUkpExqELjzoLs2tCVYpgPXW6r8fSqn99J2BhnYmUDNDHhniFKUEumRYMLqdD8H6dVbQ",
  "key19": "599cY2xQXDLc2H5JFMFyxKokEz96pLGrwi5D3BcBCPTJrvstNE78PW3cDa2CZAujBXcYCiBHdw5Lvyj9kXpiKBB",
  "key20": "3NJi893NqHHHcMg4349jzS9Rucg5veBfa32YFTX5AJTq8aZDwJQAfbwVfScsLFLnTQP67ceYq5FxWm45hwLC9aZ6",
  "key21": "5gFuCWTAK5pRZeCXPLEsasuQfSSKwY6E5Js7PuxhhYW6KDSztaFXCf38FEDrn1NKozmbXvJMDgdGrHHawv8ih6sr",
  "key22": "4esifny11P4fFMh73AxLRXH9tBwPWbuEhKhtYtGfyUbNw38eRJ9g3XbF1gLcUMpaRRZmvxG4LMkuwHgZsnB6rmyz",
  "key23": "4Qp1tneyNgGztpA61hjkU5dfv1WtsmxUvvSYXP1GmEMKJfex3M27Km2CPdbaeNi5GwCYYXBTrQXfZzXo4JDiT2mY",
  "key24": "52s1dx7G6zs741223vqdgWjmgg13wHyUXnV6knCQ9w6GCKbS1MKJAh2z9FgM2tkoTnKoe2xduYERgitRRR7gBHYc",
  "key25": "2LLDkSNJrJ3J2y2nNxhLESwVZeQMZia4cMSwhTNSmBVEBLspjJWHn42fhNfxicZxJZkcpx1KK8gkUvswr8f8yCFy",
  "key26": "5qxTP4fjjmbDf6rYtZeUDv5FKbm364px1yREYrKMBpmJwPbbVPL1KPuvQVxsVQt2J2FcLK87jGiM9zwozdZCNcuH",
  "key27": "42zeMPNPwCJ3YUA5EwNTD7H1jVQXyX5x5mZ8CjmLZxrye1NJUzxxCoRTmsxPUHKaVEoD4BCU5vxerfnL1aib8ros",
  "key28": "3R4aTUSJNpJgfqgN7ZYr1sA8aYVPPmgAfhDEqZEcxhgjFd4tUfMzsX5nHFFEahFoahb1YdXV6gVmwGmxz16UtzV5",
  "key29": "2tN7j2fsUXkGPHC1G6pvx3nTknhdrJnjAFr4ShWoQcN9axGirS2hYfx7pPmeDdsb6m34jx5Q4NnYrY4Fb3DQr3jF",
  "key30": "2ta39888UWrw1PT4v4V3wscDXWyfBAveG4RkxX5qHesEkhWJksa3PLR5ynQ4HimuypK6wpFfEhka8T6QxKr1L9Lj",
  "key31": "2VQLWqJw9zLceiPDbmxE7Sdd5fciTRNM3WJKjsZjGNpqm4Tgn2ys26vBkN2hLcGVPotajbLuMzr7nQgW68qRxKvX"
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
