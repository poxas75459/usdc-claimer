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
    "4RqPTLCjnAPc7heVaLPnQFrwuM829AEqopXfEgqeM4HvMWtWiWqBxbJu3rFQgodMyUWu7MprkZjBpRiCmiJpxPSd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ApKzM3iDiBdfNDd6ZMkV2hWG3GuSEiYWhhMqoutWPK4taEv9L3hE1W8catXpHXcjUry1XSCEfmzebY8xD1vw48K",
  "key1": "5EB8J2dk4cdF74yABLUNynRh5CEPtA7PEJtCqV8BhYxGLfjR8D1EZGzYRhxVvqhx4x7Rw8eYrTGE16UpxV4b3hQ6",
  "key2": "49hZ31iTi3CHeaiYdRgjR4hc6i1pJfKXfUWxoaLYF93H2gHqJd5TRnjgPkWqerV8nS8c6ba191sGLVG8zu9qToow",
  "key3": "2RocfF8MFicz3UM7N4Dh56oJVoSiv7EAJ5epigF5HbYwKYhKgt4kurjb8y4mHLWYjU8dKwrRMvkFHCSZ2ECJaGCA",
  "key4": "3vJpFLrwBpqkdEjn4SYwU9na4XEUdbv3Bgc3iaMuVU5ctsnVEj4xKRuFDPo7tjGsnWEiWBx1nMjqAvKUDDfbkk9J",
  "key5": "5HbSkyuYRd1G7q3USDjiSfCQjiR81cXP3wTRY6qpGPJyXtp42m7wPwFxR7d7EcmDNE8MPqNn1PvudTUxe7Q87FBZ",
  "key6": "2SfVrDWeMtPod4oegUtMMZP2eymnLLL2pbwhrYNrxDdYkn37bepda7gZjQFti3qpTx5KVu1XN1zsWEayLCZ3fHoU",
  "key7": "63PvANzCeWZMCjZJddJD1cJKfxzmf7HH5AjuVCPSdyeoYwZYWZVWh9hojhUPi1paxmxTgJ1iNSout66gs6HTwQuk",
  "key8": "4SzBoxXEoZ86hrePRLDzExF9x8t32e9RdouQ2437AeQh3AHFL9sFeFuxvqd4VpgMfixstaLBtLAyKLXKGDQcZP2F",
  "key9": "43H2LXJE2A9fGgUwSphBwmLRDSugTAZWHYdPt4Ant9vgXnFJrqBFK3FLHo7asn6Yq4CMQgDsovDug3c3FTAKgMnS",
  "key10": "8wdQMiu76MyN7EvjuEmcRakzHTFSpD9a3rNyoKrNbt9oMFynVPXpFyMBivwqsjwTFBwu9pZJbMvCDrbcupmaWhh",
  "key11": "3bN7TKqMGgZwkp1Hsqxc66usopdVE3V61AKAz6ekDQwTqK9M5htM7v5YPtWidCAwRaXbj5kHR9EKoCx31ueQg2R",
  "key12": "9UNFvjD2SnGFniKuN9LpSuQGkSCe4cpxiXesencAYjPctbkrW4W71o5sbS5MpTce4nxB28Uy2SMUNZiY1Lm92KT",
  "key13": "2E1cKAFU5pq4S9FFsVyGDzYUixnoZkmDrVnKBwVqhEcZM2GKfAnTnrpA2h6SKpaaMnXyfhogt9pmz7JsEtBReXGp",
  "key14": "4HXUphAPn8zzVxifhKXocze269gaaMCCrwJoWLVD1CJCjMVQiRwJhyxBSoeoftiYPHr9nJrvXT8dkfQFZWz2P74N",
  "key15": "v7qbsSund6Euk16HmwCDRTkib5eQ2rh4SPVfTUSSW21hnbtjrAxXXWEXdKjrBbeHfLaqLuNZGHZ4jTmoKqoy1PP",
  "key16": "5LqHMzoeewsZGcgjo51yDz7GovmBBS1BwgCECYcvPpUtzeGvYX66ZExoFNJUseZeWjRcDj3PPQc55cgN925zRv5Z",
  "key17": "3f4XmjrrHqHqsT2SHUgPoY3VmnAsREceKt3KkFkYp2jBAkRJh25bffqC8VHGRNZpFCSnPgpuEm8z5b2vhMerBzii",
  "key18": "2vzS3gccLbaHRut7ztGGDYdhWXDt5Y51ppLnJPnrhCdj1UHbokgtEFtSJHFTxop2QHCdKws9EQwfNZD3bcDChGoa",
  "key19": "37f7qbAkE4v5g8Pn6siRnMwTEbd9PHrXcAhyE7eZvqxW8KAT6TBWVpPZKTQXD2fnYV6Ba2qYr2xo8jeKitNMXKfH",
  "key20": "2gHZnpq9Ka2VFfFyPhJTVv9uDxSYcxpSqgcNBvLjzgmEPtEYFdGSjxCNwSgDzwN49XzwiNDHTNTmaoSEvGUGr7zn",
  "key21": "5T5iup1pfquqe5YwVXmcofQ26fDcD8zSCd664E422hq2juXL5DPkJ9W4DnBzLAYxBcFT48EEDGtDhvDwk5e9LtS7",
  "key22": "4JYRZVnf9qMvXJXBecLusWiDeSPUA15PPedmFGiZ25KqzND8DNwqmiDDZ7V9qeWCHssvZA8ByDi8dAaoF9EpDjwp",
  "key23": "3xrxbySwNKvg18GC7iSPB7Mq8V34JaHJNs6GdVWCEE85wDL2VVwYCt53LA4HndCz8e5LJ5iifekk8zrxvL4a91QY",
  "key24": "PhGS6ztENpVRUsXuoCpEh32qL8vSbeNt3Hhs4wmVQnntpBxYTugdvCCGyk4ne65EGpSo33d1uommSBGgEmup5iC",
  "key25": "4Zkk2W1mhjBuoJajE9eV4VQZSeKN261bMfJFrVcRk5BrWk814zHVRU3cKVgQnky1dtJEoQDJDR9j3QXAsXVvssJu",
  "key26": "YoZZxAn32wuKWZrm7ZTCEusk74BQK1PZHcqqafBCsvj8ASA8EAWj6wtFx6YkjDvdS61ZjmTV1coPU4Zp27rTcFH",
  "key27": "2eRwab94NcoXN5wCbfqBevYos3PHC7ErbxmybeqfpYksdAzFRh7YHwSWWog55GP78ge8baihwTTrMaEWarJRfc6W"
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
