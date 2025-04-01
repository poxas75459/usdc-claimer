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
    "LLPL8pNhzMP92ryoZAQxm82ZVikjJP27HeBThUE3GqtoRUvnDp2Y3VwWs43B3fRu2mpMWD5MGJQeo7BsDcGv7FC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KWT1H4nJ4Kfd1dEUL3A2BQvqvFuCyEhUr7cCADXbN82hPmoPcx17WemWnBdGorQBWWsyUCusDupK3YvTNUnP51m",
  "key1": "4aN2JJ1cdMHFqtJnBRaoNPMhFRNCu5GJY7HiHCD43DknxiXznD5ZDXGF9hqaDgTUuKMYWybW1S9jNfbx9P86DJPC",
  "key2": "4S6fhoCeJ584Hw51o17KNRvUQBLiLni2KnoNGes63xwCY9AfGwqPk6rZEGc6F9S9PkmY4S6UbEz6MDKQZ98xTSAT",
  "key3": "4Mkhh5DHMeRdD1g2TMxG3N7iC9k7Xv6hsVqJDwyeegXu2LV1FFEsPsBANZVyYuxCMgandydNh58X2jQ8LSJCp2dG",
  "key4": "LmztX97LjXTQbtRwjE7EBNfnUyasjd3TRXWgK2CuAc5pScHG93tUB37wezPv4oUvmjN1X4jwuh1T8ZwZeJVhrUa",
  "key5": "2QRUEN8ZXZAdXLajC9H2nGYAYx1SiZG6WH2vS2HG5y3SqhS1VajwrkGzKGdwNCexuqE7eAGTNAGf6PAFgKVd8eWv",
  "key6": "3CDAhK3HjNXR7W98v9nYrdb8dsbVnhajGLB1REzRoysZMNduJ4MKVjAGN7rBBCTQmeapphxCDm3eSwycQkcZT9tB",
  "key7": "Aq2UuMpdyAhu41qsyVjVQ87GMaxt42Bdz6BW5q7yAMxvmu27B4gzqWKSKtKmnCUL8vKuGUY7VE5VfK59iskYvcc",
  "key8": "5MdFFXwSz1xoUXkSn9WvrNhCYQmNBGEyE9P7iyHPC8dQds6G4jpVCbtE3j6p7JZn5f1nn8cUeddxidjycbUXWBKF",
  "key9": "4GuFHaxW3YzGLSDVTvwGYeRF3SFYkTJsb15qHVWFvh7sgcUbSrH8YdRL9Jx2pX3NY536v7b8MkE8xfyapc5kxpop",
  "key10": "5xgdjdmjZSBCbwBdHmHEur5hDaxyAFUjoroUHdJHCnYJgPTV5pKoAsUcjWBJoiKaciELHLLVuyoyti66EECeXssY",
  "key11": "3YAqZD3xNUeH3Ms5C7teXkZZqz6qGW4Jc92m7mNwpRTjQtReEuE5jzSsAuoCP3HNB5qPD1TG5fZjqeg7GT8yFz9r",
  "key12": "5Loh1HdUAc3qR3Q7TvsFbV3bUMW3J8FCxJa3W2Uw8UxRXxXVo4ggR3KU6AviSWWxD5qQ3egLhQQQ64KQNiT9pMC1",
  "key13": "4gvuecxZMWN3UPbVdfhKuHnqewHamuAeUaWaMiWQgHc2anovEbR9oHv1pYNuptVXofT3jSnUEgKLioasXiYbPyrn",
  "key14": "Z7VCjjzQmgasNrViucQP5zBBjYTudeCqALaBaKSrM3KLsk7Pk97MQxcCFQKtYwDZ4ozKcLvwP8TeoPjn7DNEz6S",
  "key15": "5KESsiUW48c858vpiTZUC1cuMLTAh8hUyGLcp3cvjgjG4aoLLLDSDNdjh64RF5d4q8D8PB4ajDvj4pd2aUadMgaH",
  "key16": "5b4xWnNUBPFwde41kchG4Emqub6qrQXw6ePxFxMTFHUM9ua7crKvDmPtUPpQg9Cp3wXx15zsxe6L5hC9csAJDVLL",
  "key17": "2r4jVxs3xFGqfbwoPqKxLW67o7SJbF6n2TwZQGLunZgbuCyU2MhpoYR8P2fS2HkwrbmLDTWVGRDzdpn3LX92CKr9",
  "key18": "63SKNMgrZm6oAKLNa3pakX1GsNdrW1Ybfhcm8Fuvt8NQW4MkimesDA8Nj9jRqJGWx8U1Kg3u8zcUwFiayypGqL4C",
  "key19": "5JEPS6YYbYEo7yh5RzjzFwxohhtK2am4gWzT3LTUiyRdJgdkqrAjFTDQqEjj88vYDGjdTbGYGyJmVPgUHaAqHmoR",
  "key20": "2LhzQzWZngZ7JcTMHKqaAzMgdWCi2obzAfpBvoXQ6ZXvtpiShdCgRDVhkDWPwXbp78MUiy8a5vcjZQASUPJc54Zn",
  "key21": "3iMXWgkpHq5xtuCvUyYZGn265Em32Zx9xr8Rafj5qPGVZ9NXNBmgw7ZVxAsfsST7z4VooVCD12i7vFQyJXSkxZkL",
  "key22": "5KWsn6QY47MYpkLDmBVu79Wa4g2kRJrq1M3EAVP1FQHeM5kNpYxgNu9DemcyUmbHi6FgQ41ccc6Y8595jKvkkr2m",
  "key23": "teHbU3MuBzA3SXXbrKANGzNN9P4AHDZSs5Z6XMzAsuFTHnb6UJHaajPmAWtCFjQeQe9BtbR3vhNqq1mZpBcR1SB",
  "key24": "CTnV4zZhHr4ehw9zQhfFfa8tXBsiFq8eWd4Fsu5Q2JyXWYiCg2gVEjDoWhS1sbbqmZG1sJhJR9XYgTK5uQ32Xtc",
  "key25": "4hUCbpuiL6NNefvRG5BZM3fFKnsJaUGYCxiECjea1gzdcR4DjEz56zDKSWzZBvpeiyXCUkyD6Va2WiBrfmm72iqt",
  "key26": "2ztN59xrrqqij5KNPDAxMeBBvTG3TdQcGJBfpW5zVEPGhCLZQV1uZ3ERsw2JnD4T8G7kK9iJhRcPqGzKQXwGmfQe",
  "key27": "QCud83GBaU5WCUg2r67fw65Rqp7gMwDNttonPLoVE9JrwtAmopKu8kj7PLSDoX8UDNoAtGCUePHfGyRq97Cy92X",
  "key28": "2hs4a66YSC1TmqocZEYqfyfi3qNghLtrfdu5uSobvh5ZKmViqshLuzaYMbCNJQmLJCHKCjT1kdowPsgSm4rU8oTC",
  "key29": "5znT3FoHLPFEbJx23X3jGT8VyW3dufKeWsQa8UYGUgir2zHJRkhbnPBZAJdBxuNiG4qDnwfdjtaxMe1g3VT7B8uT",
  "key30": "4J1Su9p7uoTGtFPCVUvkPsbCYxmqDaFC4QzR24EhAX9unJTUAeFVa9xmKtggbAXV1TXpdR6nQtwaK88dpGcvdv1z",
  "key31": "53gutwGFZRAhHkX7t2Esgw3T8ZUQ6jn5FDFex5Eu5BHN6v7exnDa92b7Ha1CqawhvabMsv41aNWAac9DXHKS5pRN",
  "key32": "3JUU27etXx6Pttq8ZeYBqHMU5jGVJ5LKyxy1uANPR1xNEpywSPasRFVxffhwyvdiyAat1rq9WeSNza8hkmQGGkkC",
  "key33": "47943GooL6GUTgP4yL23PdPq7rvc3RtUWpSvcDN9eSR8umJJBCDkWcpaa3dvPENcZkbgmEtnLV88T8R9PL8dvHef"
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
