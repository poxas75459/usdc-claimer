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
    "35c966VT4WAPujsYPvhMESWnMSmEdi4BubBieY9hDPdBPPRfTtyC8WAd1o6DdTtb3JrHxHptJU6YNjhxLZULVdtY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gjFCQpLwY57jL8AgnDLN7MzhFTkkUUf5xhxJeTSmbPgXSBVqNakRkDKYo4GKM9eguWPAXMdqLPATUSdDc2iUi5K",
  "key1": "2YiUdq5Dwk86c2ywwCrhRNHZLfY7nLFdpcChLvGtCSFgVtcU2or9xv1udTNtDdmP8ELJe3K2J3RMGvCAwqk9XPW3",
  "key2": "3zzc6wqiauk1wqFrr7AmawvJopQ6hivDZB4UgonTc6x6pfegwKjV2drDxhPNe3kdthvU5hugdUaHLd9jGKgkbgQ5",
  "key3": "3VHGoBWwXCpNBcidKQLWVb3Urz8PwEjnfoZa9Pzd7sjJqugoqdk1c2KW9joSTS71jcjjQH9iEyFd9Y6eo7SDeKZF",
  "key4": "4qygExdbgf7LNK3rHVaQggRQZkiNzNSZ5fcuuNRsVfyqYLh1fzTwNqQpCgumebzcDHe9GUfnLcHWU2y89uSZYTUW",
  "key5": "4YmLj68NbtfTsYpRgmbCnEcYAJsbSpdH72mkYrLHYV9DKGbrMoNQkrhHwraVqEa5eBhquuRUNdoXd3u3wABkhT9K",
  "key6": "3qnC2k4PDBiu1ppNkwRjA7A6yiARPgDBRBByoZ392JgfoLd2bLoZmvYBPPBNg2dadDyetTzWq6hfawe5ajcWGNn2",
  "key7": "34hqLgvH7K9Ym7VmEfA2KWkydzVnkZBzhkLL3QC97YSPnzZAz4tvnP46mySCUJhDfagg8NBHjHUhh1z4KfiWToBc",
  "key8": "2djYhAA4Wcg6GNF2VJBBk1YAJxEb47fCXQ1T275usYSH5rY1jn2YsYGwpDCBimcwyZ7KDNTSQiLr8AA4EbBgPSfP",
  "key9": "3UrPf2WnEWXa5sEDGjm6HcH1YcpsFqKpmcMQAtgZWo7DuXWLVrGzvS2kdEdVCNGAp5WdBqSJmRpJBngtsiW641rB",
  "key10": "2XJBDnE6pvdvQpkgPVZTHCB8wZGHdD4YGtWRHkSjyvv8PuALkx1KHGdG7W6k9c3fpXr8SgrWbFpX5X4NFDiQ8DzZ",
  "key11": "TsDA5ngF3bsxRwSBuQ2ReaimY89fxPdVdKtGHaS4UDpkUvAK7m9VY52mL9vYJdHbAPjactnfJypBS9wdLtBuDBd",
  "key12": "5YiXRWqvbwPM9ngULEqK9ojEpZLF5nEuFA7JbaYPTsNdMjqbNiZdQXyMBVk2zNDYbtr9phgZzqqqGoSrb7x3srbb",
  "key13": "2LTj2VEwkbhUVGMZEByTP8ZBdszxQYRjv7XRiUWjBRycjzPK8QuuXqERJrEXsew9scxDSfK14GtTNrNiTnUUZjr",
  "key14": "5ZupeQKXYShgP8fbTezW5KHv28smR6fX2ELXfQkjkRyWJYykwH1eZooeUnBrUTvPTu2HCjrkrRdqHpoZJvH51tWG",
  "key15": "3XDZVb6bcbMQf1pM6d5TqzuRmfaqRr1H41ZVTBhyvySrXcn67GvVh3Z9t1DnchgQqzM8sE61WsKsGDzZpoHvSzC9",
  "key16": "4WttLuBbj2ouymeGLh3pFsgBXqxLoY4JVSrgLNKGz1UN2BkPXVanEtQRatrkqvYNhzy3HnrwEkDjoY7huytDX3zA",
  "key17": "8HfvNmhXg1p9UQ7pvHztixDExuiC8sS6ZPtY2UymyqeuUsbgs1tLxRjBx6g9dArRiKuuqHLdoxd9kacSUPner72",
  "key18": "27QNPLsruqiWvqxeojeuhoCi2gzMm43tfwePTWswcJe91mxRuNdY2UU2EZKhpSF3H2yihy8TTGUakoxabg68tdWn",
  "key19": "5vaaLjrAWEWEXQeMW1seFdSt3L42K9X1XevnUbjT5BXKUCExZEGnb88m8TZCXSTqt7YBQ5cFuroQxe9jLqwGorJC",
  "key20": "56nocaZyXSWGHs78BC1MWJ78uzNFAQvrhoTaicWyez3BPg8GbwmnSX35shd7HSnCbLBioY6Jz5wgyy8izoeugeVM",
  "key21": "3CGxhyvWZuojuZ3hdKi98dZWYJT3e7TD2vmbhmUY2asqUpsBHJpK9fAet7j2fDpNpbQekZsx28LEUw95FeUM418Q",
  "key22": "4GfesFnQfsum9pdpbLmWykUiqLv4DYv4fdCJx6B3gM6dHs4Ga57Arquh8NPkwq8C2RH4Jufdv5mo6NDEa79eTbP1",
  "key23": "29HSMNF346YmAoaVGVWdEzQ5bgoitbA8YJiefhnRNHDYDDnKd3CRd4fKSV13rj547gQu4gztyt7WMb8s1bZG7D9C",
  "key24": "4JoqVJZhsdEzs66tg5ZbRnx72aosvvP4muNGWuoaTCsumqSzPGc6VsNQHaTkcPABjtjMAJzzEJnpjLpAd9nEMFMB",
  "key25": "cQfmT28MJvHnj5gNipts5A6ypWRYoEUkrebWZ7XGrtCPDb72ytmHPetRorqgfSZYBQhVAJW9b8vuYdWMbxUHus3",
  "key26": "5mDgStbw6HsT2upv5wjiRejpTAnCX3bwznydUXZMsyVGpn7DSYpjSWundQY3W2jMH4Z4uk5iocjikQzzEG69Duqg",
  "key27": "4hW5qYUqmYkMyvFbiTdHBqTX6Lhn1PaBazB6JmuF6K2iX6q1eV6DLFZ8oUwviMbc2G4EPhLmSBRSEoEYiFJqmgat",
  "key28": "3YtVVdyGptaZ7JLHi3yVXEyYtKSWjU6fg9UbLSBfrshDXvkJB2HpkjNnYjCbAnTgeWp9XFg4nWbH8ZS9aPvsUYmQ",
  "key29": "4Jf6NrNdvqMsLWxvVhEDCRM7mG7wfH4n118nPVbSSA7kuropUmze8kXeCFDTHUxPcnfk9Y68JebkJ48W4son2dwT",
  "key30": "5G7tdMAWCCd8WXwahSDZ1jyEHR84yqW19S8w3w65UXhqoWDoXLSKz79FXJKYESdZSmDTq3hW5bx2MH8wRTkr5nVE"
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
