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
    "5epnhkja933sWpyAQQ5M6LcPVfbDyheVaq4uTK5VHFwZmVLKD3Rji9mnhsoaqw931Cw3FG5NC5hFnvvPwf9bHKsV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SAWGXRkPE7abW7h2ukGQ4cF4dLS8va6XMpaihAjYkJpCUFDqgtpWYWcKtND28wN2hmDhu1iXHyZHMugRs3Xzxgp",
  "key1": "2UYXepFBA94PuEqL9jgULxmyb2Weo6fanVcbExyLGj5qLjEXEdjGEmCdromBLG2zAjfg7t84cbX81ceB5pLiBR69",
  "key2": "5cLprAA9KNF9sAXF12Eme6qoP3fVpr9aurK3JFM5XWcf456Ury4WLGcq3b7idrdB948jqQ2cNpYNaULTN1NC4LAB",
  "key3": "Hgvs51pTbwFdmGKi8FE5HWuUi1pJ8GVzVjuvvyeL3zQJzVC7SVQoeXqUYHdjrgxTegz9zbJMQjmDvPXp6EhrNf5",
  "key4": "4VDcfkD4ZHD7XfTho92UTu1dJFVtNYBniRPEH23hB3kjkKESH7kS7kps4QoBNmoJK9Q7LhWKfG6qbvDSBP9nN22U",
  "key5": "2F9sMM9WmciMxkXjRnLqAWAGRsNa7iYrCazaWvcCpCkEnEYfm45JU9KvADyZo6X3ViqAEc6RSQpQRofVDi4Nwrbh",
  "key6": "2GzcJNGY3aGUTYuG65eM21618dkAgr2o9njzTe4qRWdHyest9qFkhRf3bqoieP5YfuDNtBDhqiECTs5Eb69vfak5",
  "key7": "4Qm1788nZ6EDbC5NUdfEcJkHLdhqjv8ojhzMuYkh25rLngvPX39NYTUBFbsCA2vWeSCjDcUJYdJabrHf5xSWs4sp",
  "key8": "4jvVG3LEn6v4BsiPUH1ULHuWdHUtQ1itvyb1uK526nT9nSeaxGHSzo4aNpvFwxjV3WtpUuDDyDrEojQeCRJjecZ",
  "key9": "3o2qMymgb918SALLTmn8i6v619ETJcYfEDSZcdjEgL1h2Eu7WsZFaJAxc3Ss8d4GQWWRZqgWkgKKPcDfycp4YcPc",
  "key10": "2pWxjQzXx53Bh93u76QCLv1vYSgX1ueaLnKeLoyGf9rRiXjtVxujAir2yEWuLRXHTrqXonW7CJgj2A3PwM33C2im",
  "key11": "4P4EgdhCc639QAjEZEsXWfEUeapzxcESS7YgRx1e4yg9paa3PGDYQFNvsn5QvWBvz3uPYtKBCTSoCoaqTTivNP5h",
  "key12": "4fzGxPKksWUAbtyf5SZBAxt1AfQkMs5e25eZR3Vf5gKfsfCb53XC7J4Sdj4hDEuexdeXY5whVrboLHYr4bA59ozp",
  "key13": "aXfh766p52B8fKMo7qb2bgUupdFaRpzNytY6fLyB3HZzF4AcrnEChsE12SsMCoGPwi8HYcnzJ7qXChTRejxwVHc",
  "key14": "629gCNZG7ENVBofBJzw3pfx8Nes3JyDJET36tr5QhgKk4VjHroLMuVSWPERLqbHR4kmMwiwKQFxaz6tEMH8ornUv",
  "key15": "3cTNMViLh3hudRVVrhtxPapXzcdW3cnMYDXBvWSWrLCBsaZ3yHTbhL5ZziMuF5oh3ykjXKHdUGGMFMeJYFbnLCiE",
  "key16": "3wiNuz86CnmfCddNjDgkTiSxho9vpfJeQND5wztSeLMP4bbQpKgnXQ3izqMXMGGXQpsao257Vwx8eSNffnJHWKgT",
  "key17": "4Ra6GeF3eMwxXompdmuniXH1ujcTDR7YjSMy4ygmEDY36HfDc4uM61qvDESk2b4uGFS7oxMS6sw39gJhj8duXJCA",
  "key18": "PP4bktJm3saXqwFexSWobeUM5bv6nJxDp7USNJGnsWTPuK2NzmK4eo5hUPMypoQL9meWgfDeHsLGL7yxCPLQLf9",
  "key19": "5Q93rbGPuGzpBSeXHYWEFj39x6EH8pAmebJ3kzUSE7yuPBwu33rwtuojNVbg4FYfxazPLA3bSNupS2gGoJxtGKh",
  "key20": "3ey3Z7q23LpwoBa3X1SvsWfHvGPcXdNXHo184sab7bm7uKJBADSMhaA3frSY7Gxrwuux6jMLRWfPB3N9G1L48FSe",
  "key21": "U2oCHcXvWaWsbqT8gguHDPQYCwDeuGMk3wyR6ua3Z8jogGqvrBBedktioXeHWhLZxfGk4ive3e4oomafYLs9m78",
  "key22": "bJap1DKfdMEoWhzUnv3aHZhxZPfLnWtLR6tVDR4h42PHgCv17LMDKGMqVgkARd47wYzXrrZQXWboKaqY2XwqecE",
  "key23": "25VkTXG8RQXukApQvH4K6Q4YzgxQkmVy4ag1HTknMX7chkwEnNkRu4WtEg4uRfAdeu8GjJFRJzduEhiFyH8aWgZR",
  "key24": "FrqHU9hcB1nvRbtxyn758KXy5P2UDJAJ8Wx2knW4gdFDNP8Rhw9qtc1T32ewwM3DYosZjTgfRsExpV2HXQESdrG",
  "key25": "5UeE3KJT5CxgnRJx1bwGVxTMYXGmmxX9AdqXVhnpdCPsNe2SucLaJMqut7T7F13XNYAggEnVD1tbFhU5eGJJGcHK",
  "key26": "WYG7fag8fTZFY8jt9T655vTTMqJo5ZTuZmTTr6UnReud8kDm4vVU1ALqFPasc8nGWQL2rpwqYY67miqRH9AQkgU",
  "key27": "5eyrAuNXJJw7avkiHRf3SVStK4xx1W4oZdnNy5S1Q41bZHbPHYf2Wube2xcZJTAmvakn2Fj8NZ4UcS5krio1YFDw",
  "key28": "4dfcG7ejBBttTH7RbecDFXEgdBFKNxCBW22ctm8mBwfuA97F5GdCdRqx4LsjsAG97ywGVNpoi1F2N5phv7pem9iV"
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
