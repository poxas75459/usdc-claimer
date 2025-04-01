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
    "hBMN6Qu2bUB9ZekPYwtz74e3keLiWVXC1yH5rFX5yMKJgyCCQFm3jv2bytt2uXqZr71ghjuah2aX7L1YrwBB9Zi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kXxccgtykjE4AQ1Pfp3UGEvXgtRJjSH6tB6PxMPyhs3zL1D89vtUavfpWfY8cZh8N4deUsNzF3RTEQHRGc93Kcn",
  "key1": "3zsEUuSLqfH5wnpjBr9dTYizQ7gD55WXTWtuByemQwoi2KyvSeUCigmvqEwrNear6KzwNzKV5QfVBJ9WDpHZStf6",
  "key2": "52AsAY9gBJeyJHPpUE8r2FuHk7G2WfP6Nu2cu4V3ZUGQk7TeAT9rcTedcfnpW2T89PAktEJT48EpPRi6xCHtarwm",
  "key3": "Sj9GSyMX3rn1mmgxEwxs3Sopr3ZGNaJ8yf9i4YTnAnckLzJebARbzfBWh9RPXfUzjW2ijw1tG5rg9TBPKPjivTZ",
  "key4": "398M6CJnptmydwUFx1NttNWDpeS84UGMW8XBYDB1GdX2HwzeQ6oAo2xTqz5PhitEjRfkPT3Jye6h3ivxS8fHRBxd",
  "key5": "wGBrPMKoMHMU8HMDU3DbNXo3VM69Xm7HfgjeXeCARvh6jHatmHwndYqkVu7KGwcd9t3mYoGkczei1R3aVcQJTLB",
  "key6": "2UdM4KYC4VPeP3v56nc1hMDU5ZWtbEfLn61FvGYgm5fSmkANwRjLDVaGbdujTi9aHpLqRRoedxBhD49AycuYQH3K",
  "key7": "5Sq9wH6V5c9NSncLgH71DwPwSm2BZxcxiRJFjWCwN2iRcRycA3dEqhWptBZwr8Ap67TGgvNFo51ri1GLrTikJ98t",
  "key8": "37SER7dzBxKZCiU7AFRN8Ah7QjxnKMWb44GGJSkkBvhwjkf8kojJNpmdgPYaaAHEjygmN15ZF7S1VPnqcBFUbu9L",
  "key9": "3biyiKtPyFskyokZLrN4R8RKa3xzyhVKYCoCh2Wcc18uZS398MWjJe8CUZDHfwjfeTsrDzATkMGZzQwmjKgeUq33",
  "key10": "2K3hichbxVme4gtAJZrwsb7ntHX3NKCA9TW6W3iLRVpthRbFYxQfSX58zm1caNfLXiYDxC4v32ak5ouZ2kK6cTWg",
  "key11": "2icDMZ5jvCXjHYfCu1pdPWnH7GukoFZVyDngWCvzmxPP8GnTuwwVeuw2Z56QaFnTKmnWf6RMv3JVCWbdoPejwwNe",
  "key12": "5GRv3dcfQ4AJiaHD4EbiyXDTFa5MBD2q9bJjGDtaqKMWGQYcSbgpj3dDUvkKWaEbGv4658vfaKn5M2yPL3VmJzgG",
  "key13": "2oMsLGUVu8R2T2HX97c21Zc54HcPxdgu2g4G8yoaDmD9C74iGKGQyeA1WsEK6SHGbtVk4LLyzQxPiMQQ6t35JMHQ",
  "key14": "3qNS2yQojoCXkEpNSkVzxrp28Xe95NiVFaB362So1rs3Rr1TanbQGU8ny7cBZRbzvg317j1T2i5BpQWSxCARgci6",
  "key15": "3EbaUSUw9tVmsoF2zQXQdTYEztd4cERuybL5iMqmbKJtNX9XQ878vYcmLrZYrPGY9923gps5XmRwSEuxz5rMcTM",
  "key16": "4gaM2Vb33RzweeuTJJh9CL24hV1zKEdop7Jzq2LnsPruFqztyfJNTSfca1rfQ7szt4rnxniMaq7wLMm5WRpw7mKr",
  "key17": "51fsPnGahNf8zH26igk9ARifb3M1ucCYmFUfHbTvfvsfuFiHh8bfSQwfCW6cy2BBXpUAHXinwhBh4of5aYnXow1v",
  "key18": "2SUcPvSp3wjkghowHE2wGAubvQGaLkT6e6paFKctDbmZ9hcc5USXa2JYVvMo6h8g2UYGK4u2qxxD6ACUzrDJUkbB",
  "key19": "4Zj8FjDMewCqNBQMuJmyvQ1dEpX6sSiQT9JBDNWamgFui9C5BHSkd92rnRSgmCXk9Li7REFyKsrtwXjWofZXCtSb",
  "key20": "5Whduc8zYaVQMXpftCjKMJBLB85Y16GUeriAvmoHT39f7R3HvJHAMbRu7VRotCV3jPvCXwuP9MTxHuALgrhgEt1m",
  "key21": "iH53isyyDhWpLqsPNZxtk3STfym9vtbYCWy8ooMtiHUrgw4vGCEUr8ST555XgsqxWR8KPUfSLX3eGHy31YJun8r",
  "key22": "2Yrmmzmeefx8RWEDiMHSfF88CXx5yMsNHhimFem7nDHVcgqubKRjE1ACHQt7HpqwWbV5GMoHCSjTJgP9qKgU4jM5",
  "key23": "4PNFzPmJxiSGpu71Ua1Qw7ViChw3xu8dzSDJo68nPfJGwLLrYveKyJGti3eTdoTgA3hQbfdrWi1oirMSEikMsuCE",
  "key24": "qKSxqrZUYzn3SDJi3tA5SpgNk24w7q5ZxPxLjgykPMkmCr6CxpLcRG46u5jVPRArajCujst3Qrp9w74uATQvwLw",
  "key25": "3SjEN3xR4pwNnwFuKL9q6TBf4zpxKqppQbz1LXFx4oikTwtUfRHa92qqUfip6wUMj8XfEtcxQvRPmzJ4eN7AvcY5",
  "key26": "5PWNgbWCFhpn3H975Wu56w3rSJsbXX8Q5Qc2Be4ib5JHDhU5aBUigD2ibF3ivzg5mWcdS6MqrjHtj5bnsNrcm8JU",
  "key27": "5CrGsZy2BBNGGuy21w1DMYqR99ccvXxq8fN8g9cB1jxFK2PF8Cz4dPv8uAkxEsrGr1Ceh8WjBx3i6dPrRNo1DdxD",
  "key28": "333LKj57nxxKiKqR6a5qD2kMtviasXENifRftBE3twHpuZdLShSZsGCR79d1KrbX8UTCnfae5XwGBoeMhq2SkrNG",
  "key29": "4wdS4jun853T7kb782dh8NWXd22nZ5Jh9593NjDUwNj48Bp9bXXYeiciFg71VnV97n7e9yKJ9H9pPPSHUMHfSbkG",
  "key30": "2m2kYutFcQ3y6fJudoKHruuyesth29LcgGDgxytLTVvFzqRYxpcv339cezAmaRoNk1VbzyiAcEzTzDjyCQBuV1Sr",
  "key31": "mybLUx4fUpgF6KqvenXsNupP8JsSaZ1kJDprDyeVEGhSSiuyGQgUgSgEazwsyn2qH5oKgPLccP4oerA8aFPrJPj",
  "key32": "55TCSndJgQYD44ED3HLbf9SnuLTDA8mXEWhqV88eHErV6Parx15eGgpgRrd8yD4bFBM8YH2xZo5cFSiYvHX14TPe",
  "key33": "4kgw1ht9ykU7CFGrBa1AkHocqGRzxwrk7tjCmMfTXDdd6xB7qvDxaaTmhrmATeNvNSoMrj7xf4cgQmqSFZtBWkZs",
  "key34": "65NbkerWdPyEj71MzqviqZuEMxPoEJJi7qEg9pRiEyzDDbepJRHrDarVo67o2gF7mwsvTqwvTqmPhjGLkCyemXqD",
  "key35": "yx5jTTgYJ7gGeSasrpqXcNpaLNi5u87qqd35sA5fPjU8Mqri7yM5yFZt6kHgNaNCMPVaooyKFLKd46XMue9wHE2",
  "key36": "4odBtNakLXCdK5c2iWR692Q5gzSMLtugJAbeQKVTFRacyptEpY9V27T6n7Y7NgDTiq5uJeDvxdEcKgaJoXe6jm8H",
  "key37": "5P4xjMgLKfgqZsUSk257b44o5k9sfJ6UQwuPhdG55VHEcXiiNcJT6uvXccUpSxCNsHM9WN4JNFC8Ujv729BsaDPQ",
  "key38": "5LrupnqRxuzKDFMrvq1LjezB3TgPjgGQTmLBzG7edqAZxqX8WypgKhUsXrB166vYQFoa7x3KH8PjEN83hyuD7t3N",
  "key39": "3198xctSLbTLqnhWgfRc5evPcRcqrLnCUeBgZodDfkgZBQ1fHymDviVjiFtxz6czgbc17xBWR5Xc6vbG3fiSdxYA",
  "key40": "dZPJ4ReRgBZ9UGBq5ULP8pNe3xnGotpRVXQB9vrz9qMh7aEM4VAJTqm2hYowNJcYzU46awU9rHq25zXQoQhFEjR",
  "key41": "48P4nfQfrujckXsWHHfWvRH49woVf3W86uYsnoLdw7dMjnrpBuTUHVbjK8kUm21HjvPRfecY8KRL5kdFMDnJDh4y",
  "key42": "2e3qi3BEKpc1ojRPZav77LNTFbPjNueCkSa9AnEmGHoGF9t6LrSWdVbjVBkRhYDoi9aMru6ozE1xrqcc9d78HFQj",
  "key43": "2KZgGsu32crhjXj6yAaMmJwD5FvfZbnaEUpJAzJmewokuYhBxDjszbJM2WVPhQy1uZ5aghp8saf5983iScbKR5vy",
  "key44": "5jcR4NSqJ7vcrzyHk6aD327svsu8TxejWQBp57ArVj1UZuP87w2hKXyfatc6uZnTBNQ5wAoZFCptAsFRLH4Ncbqg",
  "key45": "4bPJnhVHxJBFB2Tho6K9cxXPnQWuQsBjfffQWf2g7ALj5dsXhRDRgc7buTnt1m2fUcurXn8mBVuHkhv7j2wQcqpQ"
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
