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
    "5vJDJ3rArA94zVPnF492iKjkm3QqBySJehB3WHu2bdAhGG5d91u6XW64rrzyd2vka6ytmNEPnCtWufX5dzJftNrr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37JGgMkEwZTZRgNfhrX12N2RdzziPZqn8fF3M2Wdg6V2eFjezyiDvKHB3ZKDc6n97ZGsEPELgR684ffyFBVFQrgZ",
  "key1": "4iioWmZ4w72uFf3MkwzPk4iy74f2bL5DxcRQDmFVDTxdJdXLYDTVNFujU4kFTLxtMCCXnkuf3rCedbayWkMUv9SL",
  "key2": "5SakHKCWmYeABof3ipVbmQqZegE8FiGmSpzcfmo9HQdHJcbp32ZzjFzihcJKNjVunG6gB4adjNpNiFAKa8R4BA9e",
  "key3": "46oSF8KpYKrpJr66HkFEFi2CvBQEwvdsr3zwKqqKNAa27zNa5BDzdGgJWvDBnYpdzRSE2EpszJXwEzvqMiae2WV7",
  "key4": "mvM6gbd7ni85rszuWRSBEcBbpQYbbjfHmunnf67vMa1awDgDRf2WHAyKofpbmfa6mrF3v7xMjR2LHYLWX1VeeWj",
  "key5": "vHibip78nehG5uahk5vyauiGF8gtJpMtGPiqpPAdPXce38bwv4PfVk5VhjEXAkyAYDSMLqshUtwMdNMDsyWVd3s",
  "key6": "4kC6XyZQk9n94o6ahhPq8DbLwdt47rJRKpusiXLRhmoCYYGdrAP3D7wckSPAJaqFSbFSbmWHudkkYgBSrm1pX8ho",
  "key7": "4VumQDgr4w9MutcBgE73FWTRAQGLq5Wnc6pWX6vG4KzcEwc7Z5Btjx5TkUkPsqx6E4uBXHsaiJjKWz7NiSM51daC",
  "key8": "4yDJHsadWiW5fqL91r8XUeFUuuabvGpV92o7nTTGcKGTsaVpqauDRJGsPAHubnwuvfbzJnVi8szCXnvCENKMMhxd",
  "key9": "5EDRxjqE1fTcj1bfDkvdsounH933dwQvfNo41CkzQWgjWUc5FmgtJzHFREpoi9FVGRhJXmiLcR6dtUywAVJv3QM1",
  "key10": "34d6p9fMfKjf6mBSjQkPEh6ZQCjRRsiLezdTzvggAhMusuRqUkF1XvibYn1P8JgCpmsi16PSMBZM3VHjNwNRH1fp",
  "key11": "z13KXMVHPD19P2TtexFDugppksrxXSA1kwQ5KtwiyS4LKWLd6c4M2xy9qbr8aTcHFyMnRvAsh65rMDJPKniQXaz",
  "key12": "2uwzYKMDchgqApDfTcvJ2TrFrG1QyhZC5FdhGzBVLCuGLduG766nevqfijwdiHBhoCWmdkPuVQxU9RccTre38EUw",
  "key13": "56G5uZJtLUMbHt3J5GZZjYYQnxwtGdLZPHT2qgtaCxdHdghUH38y4tnEr6P8tPCSNdUMhtNhTmGEtR9q3p8xJMwH",
  "key14": "nrwckSQXnXtaXvy1Xpp5taMG7TGPrpRRRc3Nr5Vm2cwzroGTee8L9s56mgQMNTrU6nwE3zJvJ93BvsGj8YjFGYe",
  "key15": "5wpWErmQ8CGYuKoUeKd852iMgtz7DytRY3oFrdcYJoEmsJTehQAX9Dhbx6WqqvsJyw4nRHZ2TW7nPNRq4CChgyk9",
  "key16": "2ghVnTUR2nsHTrfWFSC8YqQsmgvqBNgLFrUzyWj8Hnre6RUppAYAtxrbXwn4GSEpSLM78dLCSqoGdGh79mgncuwM",
  "key17": "5v2JrEWrmpR6uugMQRsW1LyT9NAcwAvo2H7MC9HUgNuSaNVUhcbmeZ3fmhDfiuxPeZmdFLJiDwVt1cXgpVRMjpZV",
  "key18": "4iuhrq2Xvg4tZ1viSK9pCPjxmXahvZwefmknTdvhcArPkddAX91gUDG4vkWZ8UCQ7phn9jLsdBHjtNz4hnFJviJ",
  "key19": "5ueMdCmUt99wE9sYEDxP4Kn2tmcqtf8DLz4Vyi5a4MpgP6bCVXmPjWfoRmRxjPRE1TD6QZHZVuqVb7eLEadfgMnY",
  "key20": "pgHgsVeQdmTTWtz5dNiAnqSP9by33KbN8MZ8mBx3i8Hio4RtPWQEJCwNYRBUpMhVHHC8Ed6KA6Nd1vsK3rmYERw",
  "key21": "NEpQ7YpT84bQDoDZJ6JLPS9MWoDBJH9iBhk26KaUoTPNzX9ucfPYv8HDDQHoLSnnvZoLxNfA7xo6NSY5R7abD5m",
  "key22": "3sE8HGhh7dgNwWVTgpPh9VfHKEDCTSMtjUgqT75VU7t2sbMEsMb6wY1fWsEpztyCwJES4rGp3cwrpUbsUr3jgLUy",
  "key23": "5BEZwbZdZZ28vuo56quhrQuZFSXaLw9bF3tooa11oeDgcVd3imWGGmxNvyr65FYRf1zetvCfSwVBxH7B3w6p2G8k",
  "key24": "Z47jNtiv7S5Z8PAfDCVj4shCqqU4bHaZBUH7WjJ2Sgeko7WRd4xeP6JYhq3sWmMXChJvx7cCaB7fAsexjehQyny",
  "key25": "2SDdzk5AyEx9z9mVpeu1SjSsCep4xojSefBx8nKuzgJrbVSzQHJsSsfr98Z16YqwhaA47yPEhwPbWGxeHefXrvCV",
  "key26": "ynFbSKM8XCsJWKaThMaRUczAfUujkHb2kjzoYyyyvPFKkL1VVW5dWuXMQjvBRG5WJqSXjbyA9Lp71wWKduyiy9d",
  "key27": "E9wWPLLTGSNRdm7J4Yx6qpP9ch4h4MbEH2Fgf9ue6sCZGbvvadLES1Z9BFAT1BpMm6vsxPmF4uFW4JqvFNWcSro",
  "key28": "iMW6JP3XKig5eFd6PckTSTByiYXFqKKB6ycvwHSVbokzYmCLr9qhkEVMx8u29JNXEYYWE9TnjH6rtoe9Koyw6Cb",
  "key29": "g8qkM62kU55L7BDyMskb45KD4kXYfHSJv2ibyTcEV8bpuZDfRPTRWmdap5DiFDuzZwHmgpBa7tKzbTFSM6ZaQxU",
  "key30": "32S1HKW6WHQXTDgAu5WmJ1ty9BxeNiPJn5f1dnKX8pXXtYrJGYkTEetB8sfoNfVsuThxDg56bYUoWue7tpPA6QP7",
  "key31": "4uz93MJkWLyJdmZxvXVJjRkhXw1EiZysbLuVQoemkEHfN3uWWT7SXkgFXDoSXpiYZgb38WRLH9tSjviBcdyp5H6G"
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
