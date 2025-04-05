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
    "6qKbjettZCbqTAakNfVhjFBrF6oaGGvhdUUgQiW4PRcwttvpY4TQt5dESYx9wQbhvKMLLxuSJByskLHe6C3egQF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61eL8LxyvLkL2BdHwLJCJ4PQFpUmBbTjydD5UdwJYZuLoybE2B64jjEoNFeebyJ3HMcFaqSX2PqTWk9jRiA7rVyo",
  "key1": "4wpTmfbCxBmJhtuWp1hQZ7UJ2dkediNBmeitStCEtNW3yqFDzRvMzpXEVMX36iheWE3L2ffhMEwp8uCrdZLpUDSj",
  "key2": "2vnoiy1KX8rPCgdZzRD339ZyqNiM5kjqMELyB6UNY86dPruQfNdaArVNMBgKUinjDM9iVxytuM3EULcomzjk64AN",
  "key3": "3tgdnMZNiVrpQzMVHRf7yj2MhXZLEqb9Z2cKgN4VpznmcK9yriS1ErcTsnjzsfvMawowRMSAfvLqAJPsrVTZTUUy",
  "key4": "339n5vHkdm1ReCmnZgCH2rDNHZYrp61iXicCF1TiPLYF3WXPBvumNQrVmuW3yatTcxJPuK8y6tuaZcyDp9nRfTCt",
  "key5": "5m6HLGkCEbQBRZSMpmrmhUKoFE2aHfpaiH74h9KNiASFVhwGreYyis5XdvtYsq5sN9UcdohfU55nEZoWHhL6PETF",
  "key6": "2zt8hsb3cGg9QQDi6KX9ovLStpr8zbzTvzUvVWrvkJaG2kubjyge594ePsD39wH6WihjWkKWuoSbzLGcV4amka3d",
  "key7": "JqN2LAEKTxtLjpBUYkRmhH6g77QgXsCCp3VBFrnNoKq2iA8zhY6agrkqYakovRrYm7x2PzGJNVUt6RoT2RVtmoW",
  "key8": "4hQTr7KjGRjoNE5PGXim1kii8FbhSyJjR6sTyW3XCUH3rpP5u9MutSXjbrRDHDEG4okL5vbNsErXvEHogk6FNngi",
  "key9": "5JBUr2UtiJmaFZnfoYtkaQpJcQRoje1TvD4aV2MtjCJQyta6cfR4SxANhLDokpMCYypAFqe2TsARUZzMqKkuqXZW",
  "key10": "4bL5i1ZN3hg5cP9YqR2n6LNgLg2HwHQknYL7gnpCt4TQWvbgUgXEipa5f4T4MjiHxCAdJnYMmcwub5WziKkjmZFp",
  "key11": "4tATdhLQMVmP3zY2VU8sJr9Qfcf2rP6kHSudRKxXhnspH5mTCFGNiYwS5NhrqxeXP6vdBUANcPWhsz4J5ETARUGG",
  "key12": "3KJUGT64VLh3TJxRLwppd1b5EHkrRGcHrjx1JBc2YPtdgMRfen2VdmLRc4jK8kbYVSi4BjRjtMyFhs3fszL8pELy",
  "key13": "3VerZkTe7yA4mwhdUtEFLAh98HAdS4xx57ofMup2Lk6C8rLgUbPZf5fFReQUJ67hPHd6EjgwWHu6RJi21eZGYgK",
  "key14": "5Czpumt7cJABbo2nKUH3tdVhnEDFEUKAb8MiUWbUqUbuP4PbiozDKYExQTTfzWGWea9NTmg68e4JfVueTHatebYm",
  "key15": "5ngf2fx61pv8KKRpLFrs1c2Qo2jPFJL5R66Dxz7VC7XfVxQ8ikCKMaYLtoGj1KBaUoWJFHfbDV1iGrAxieGHrPLX",
  "key16": "TrFtBnwqACEkH3A5SrJkbesxG3wYwUBmC9cKbyyLZC4A9yiMTqEEb8xck42CwRhTzV9aLBpS5oT46J9mjSTXcnH",
  "key17": "7kgKCKn7PCWqufsm5GNBDbVUNB1fNeX47Aye97jLWHWDeMiiA5Vf6fQRQqwY1p6XQHfDj7EcKyUPz5WbeQw86ee",
  "key18": "CkfjAnyqqMHGRCKYdyZUGbSo31tDjHLoBbvcKQ4eMDpB6LCUD1qxVnvKJSLy2MkMrKcKX5LBbAR5NPEBC27ouoE",
  "key19": "nKPbhtMcKioKKvKYpsX4oyLQFvm4CTkLBcPUapX9eDfpa1V4upe5FQaTPcB7zo4qE4Gp37NKLEcPMdzHCjKA7As",
  "key20": "3gpMoCWzY6zHCy5vsTnYxZpD6k4TTi9dpQTypNnEMFEoV58VBgQXqunkAJCoH9gW5QyjxgFihNSNDyJUvnotrpYM",
  "key21": "do6gMyjfB9k8G7Se2q3e45PFV5vreGxumCBTyPUb9eCfZwcnzw8GUZ3GrwwTZjLkKkKEeLhDjbk8HuEg6Nxh45y",
  "key22": "51T6MFH96qaBWqEk5p522ETvKLZAXHXKmEgPX44LDE97kqzdVeH8SJJCKiDC7Loxu5E5QigbXrSzTaPjBBCcNZJP",
  "key23": "5u8iwtBhAVyc41aZoyY3YGbLSf52AcYCt1EQoAWEiJSCsi3vByhqtwCTisZ3r812fKNsXNqxmSA11cpshhSSt1r6",
  "key24": "4ctwcbT7aPXRucW14QNnPoptvG97RUSqVGk9NDEA3pwpEnVvs4U8GbVPpjpXqodkbTNi7nv7XtnF7GtxEVYMvddY",
  "key25": "23cwLHJn3vo8vHpj3daZJDq8mfGMzzys2iYqE55BzuS1HyhymhJPQsDRxLH1j9Z3BxSRHvM442JD5GviUGCuD1wc"
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
